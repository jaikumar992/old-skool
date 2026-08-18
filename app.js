/* ==========================================================================
   OLD SKOOL GYM — DEDICATED GYM MUSIC APPLICATION CONTROLLER
   Exclusive Sources: Official Spotify Playlists (English, Hindi, Punjabi) & Local Songs Folder
   Architecture: Official Spotify Embed IFrame API + HTML5 Local Audio Engine
   ========================================================================== */

// 1. Spotify Multi-Playlist Catalog
const spotifyCatalog = typeof SPOTIFY_PLAYLISTS !== 'undefined' ? SPOTIFY_PLAYLISTS : {
  english: {
    playlistId: '4uNqHnkmrW4Apu0U270six',
    playlistTitle: 'English Gym songs',
    playlistDisplayName: '🇬🇧 ENGLISH',
    playlistOwner: 'Dev angiras',
    playlistCover: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da840de6d37c48942eb01c6c5fe5',
    playlistUri: 'spotify:playlist:4uNqHnkmrW4Apu0U270six',
    playlistUrl: 'https://open.spotify.com/playlist/4uNqHnkmrW4Apu0U270six',
    totalTracks: 10,
    tracks: []
  }
};

let currentSpotifyPlaylistKey = 'english';
let spotifyMeta = spotifyCatalog[currentSpotifyPlaylistKey] || spotifyCatalog.english;
let spotifyTracks = spotifyMeta.tracks || [];

// 2. Local Songs Folder Library (Initially empty - real user-attached files only)
let localTracks = [];

// Active State
let activeSource = 'spotify'; // 'spotify' or 'local'
let currentTrackIdx = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 'all'; // 'all', 'one', 'none'
let currentVolume = 0.9;
let currentPosSec = 0;
let isNavigatingTrack = false;

// State flags for Spotify Embed controller
let spotifyReady = false;
let spotifyPlaylistLoaded = false;

// Memory Management
const createdObjectUrls = new Set();

// SINGLE SPOTIFY IFRAME CONTROLLER & SINGLE HTML5 AUDIO INSTANCE
let spotifyEmbedController = null;
const localAudio = new Audio();
localAudio.volume = currentVolume;
let searchQuery = '';

function getActivePlaylist() {
  return activeSource === 'spotify' ? spotifyTracks : localTracks;
}

/* --------------------------------------------------------------------------
   YOUTUBE IFRAME PLAYER ENGINE (replaces Spotify Embed — no login, no 30s cap)
   A thin adapter is exposed as `spotifyEmbedController` with the SAME method
   names the rest of the app already calls (loadUri/pause/resume/seek), so
   every other function (playMusic, nextTrack, prevTrack, seekAudio, etc.)
   keeps working completely unchanged.
   -------------------------------------------------------------------------- */
let ytPlayer = null;
let ytApiReady = false;
let ytProgressTimer = null;
const ytVideoIdCache = new Map(); // query -> videoId (avoids repeat API calls for the same song)

// ⚠️ REQUIRED: paste your own free YouTube Data API v3 key here.
// Get one at https://console.cloud.google.com/apis/credentials (enable "YouTube Data API v3").
const YOUTUBE_API_KEY = "PASTE_YOUR_YOUTUBE_API_KEY_HERE";

function buildYouTubeQuery(track) {
  if (!track) return '';
  return `${track.title || ''} ${track.artist || ''}`.replace(/[\(\)\[\]"]/g, ' ').replace(/\s+/g, ' ').trim();
}

async function resolveYouTubeVideoId(query) {
  if (!query) return null;
  if (ytVideoIdCache.has(query)) return ytVideoIdCache.get(query);

  if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY.indexOf('PASTE_YOUR') !== -1) {
    console.error('[YouTube] No API key set — add YOUTUBE_API_KEY in app.js.');
    showToast('⚠️ YouTube API key missing — see app.js');
    return null;
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&videoEmbeddable=true&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error('[YouTube] Search API error:', res.status);
      showToast('YouTube search failed — check API key/quota.');
      return null;
    }
    const data = await res.json();
    const videoId = data?.items?.[0]?.id?.videoId || null;
    if (videoId) ytVideoIdCache.set(query, videoId);
    return videoId;
  } catch (e) {
    console.error('[YouTube] Search request failed:', e);
    showToast('YouTube search failed — check your connection.');
    return null;
  }
}

function startYtProgressTimer() {
  stopYtProgressTimer();
  ytProgressTimer = setInterval(() => {
    if (!ytPlayer || activeSource !== 'spotify') return;
    try {
      const cur = ytPlayer.getCurrentTime ? ytPlayer.getCurrentTime() : 0;
      const dur = ytPlayer.getDuration ? ytPlayer.getDuration() : 0;
      if (dur > 0) updateProgressUI(cur, dur);
    } catch (e) {}
  }, 500);
}

function stopYtProgressTimer() {
  if (ytProgressTimer) {
    clearInterval(ytProgressTimer);
    ytProgressTimer = null;
  }
}

// Called automatically by the YouTube IFrame API once it has loaded
window.onYouTubeIframeAPIReady = () => {
  const element = document.getElementById('spotifyBridge');
  if (!element) return;

  ytPlayer = new YT.Player('spotifyBridge', {
    width: '100%',
    height: '152',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady: () => {
        ytApiReady = true;
        spotifyReady = true;
        spotifyPlaylistLoaded = true;
        console.log('[YouTube] Player ready');
        updateTrackUI();
        updatePlaylistSelectorUI();
        updateTracklistActiveState();
      },
      onStateChange: (event) => {
        if (activeSource !== 'spotify') return;
        const YTS = window.YT.PlayerState;

        if (event.data === YTS.PLAYING) {
          isPlaying = true;
          updatePlayStateUI(true);
          startYtProgressTimer();
        } else if (event.data === YTS.PAUSED) {
          isPlaying = false;
          updatePlayStateUI(false);
          stopYtProgressTimer();
        } else if (event.data === YTS.ENDED) {
          stopYtProgressTimer();
          if (repeatMode === 'one') {
            try { ytPlayer.seekTo(0, true); ytPlayer.playVideo(); } catch (e) {}
          } else {
            nextTrack();
          }
        }
      },
      onError: () => {
        console.warn('[YouTube] Playback error — skipping to next track');
        if (activeSource === 'spotify') nextTrack();
      }
    }
  });

  // Adapter exposing the same interface the rest of the app already uses
  spotifyEmbedController = {
    loadUri: async function() {
      const curList = getActivePlaylist();
      const track = curList[currentTrackIdx];
      const query = buildYouTubeQuery(track);
      if (!ytPlayer || !query) return;
      const videoId = await resolveYouTubeVideoId(query);
      if (!videoId) return;
      try {
        ytPlayer.loadVideoById(videoId); // loads AND plays
      } catch (e) {
        console.error('[YouTube] loadVideoById error:', e);
      }
    },
    pause: function() {
      return new Promise((resolve) => {
        try { if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo(); } catch (e) {}
        resolve();
      });
    },
    resume: function() {
      return new Promise((resolve) => {
        try { if (ytPlayer && ytPlayer.playVideo) ytPlayer.playVideo(); } catch (e) {}
        resolve();
      });
    },
    seek: function(sec) {
      try { if (ytPlayer && ytPlayer.seekTo) ytPlayer.seekTo(sec, true); } catch (e) {}
    }
  };
};

/* --------------------------------------------------------------------------
   SYNCHRONIZE CUSTOM UI WITH SPOTIFY EMBED PLAYBACK STATE
   -------------------------------------------------------------------------- */
function syncSpotifyTrackState(playingURI) {
  if (!playingURI || activeSource !== 'spotify') return;
  const curList = getActivePlaylist();
  const trackId = playingURI.split(':').pop();
  const foundIdx = curList.findIndex(t => t.uri === playingURI || t.id === trackId);
  
  if (foundIdx !== -1 && foundIdx !== currentTrackIdx) {
    console.log('[Spotify] State sync — current track index updated to:', foundIdx + 1, curList[foundIdx].title);
    currentTrackIdx = foundIdx;
    updateTrackUI();
    updateTracklistActiveState();
  }
}

/* --------------------------------------------------------------------------
   SPOTIFY MULTI-PLAYLIST SWITCHER & AUTOMATIC LANGUAGE-BASED THEME SYSTEM
   -------------------------------------------------------------------------- */
const gymThemes = {
  english: 'img/english-gym.jpg',
  hindi: 'img/hindi-gym.jpg',
  punjabi: 'img/punjabi-gym.jpg'
};

const PLAYLIST_THEMES = {
  english: { accent: '#f59e0b', accentHover: '#fbbf24', glow: 'rgba(245, 158, 11, 0.35)' }, // amber/gold
  hindi:   { accent: '#FF6B35', accentHover: '#FF8C5A', glow: 'rgba(255, 107, 53, 0.4)' },  // saffron
  punjabi: { accent: '#22C55E', accentHover: '#4ADE80', glow: 'rgba(34, 197, 94, 0.4)' }    // green
};

let activeBgLayer = 'A';
let currentThemeKey = 'english';

function applyGymTheme(key, immediate = false) {
  if (!key || !gymThemes[key]) return;

  const container = document.getElementById('themeBgContainer');
  const layerA = document.getElementById('themeBgLayerA');
  const layerB = document.getElementById('themeBgLayerB');
  const imageUrl = gymThemes[key];

  if (!container || !layerA || !layerB) return;

  currentThemeKey = key;
  container.className = `absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#0a0c0f] theme-${key}`;

  if (immediate) {
    layerA.src = imageUrl;
    layerA.classList.remove('opacity-0');
    layerA.classList.add('opacity-100');
    
    layerB.src = imageUrl;
    layerB.classList.remove('opacity-100');
    layerB.classList.add('opacity-0');
    
    activeBgLayer = 'A';
    return;
  }

  const currentLayer = activeBgLayer === 'A' ? layerA : layerB;
  const targetLayer = activeBgLayer === 'A' ? layerB : layerA;

  if (currentLayer.getAttribute('src') === imageUrl && currentLayer.classList.contains('opacity-100')) {
    return;
  }

  const tempImg = new Image();
  tempImg.onload = () => {
    targetLayer.src = imageUrl;
    targetLayer.classList.remove('opacity-0');
    targetLayer.classList.add('opacity-100');
    
    currentLayer.classList.remove('opacity-100');
    currentLayer.classList.add('opacity-0');
    
    activeBgLayer = activeBgLayer === 'A' ? 'B' : 'A';
  };
  tempImg.src = imageUrl;
}

function applyPlaylistTheme(key) {
  const theme = PLAYLIST_THEMES[key] || PLAYLIST_THEMES.english;
  document.documentElement.style.setProperty('--amber-gold', theme.accent);
  document.documentElement.style.setProperty('--amber-gold-hover', theme.accentHover);
  document.documentElement.style.setProperty('--amber-glow', theme.glow);
  document.body.setAttribute('data-theme', key);
  applyGymTheme(key);
}

let playlistSwitchToken = 0;

function switchSpotifyPlaylist(key) {
  const catalog = typeof SPOTIFY_PLAYLISTS !== 'undefined' ? SPOTIFY_PLAYLISTS : spotifyCatalog;
  if (!catalog || !catalog[key]) return;
  
  if (activeSource === 'spotify' && currentSpotifyPlaylistKey === key) return;
  
  const currentToken = ++playlistSwitchToken;
  console.log('[Spotify] PLAYLIST SWITCH:', key);
  
  // 1. Completely stop and pause all previous audio
  pauseMusic();
  if (localAudio) {
    localAudio.pause();
    localAudio.currentTime = 0;
  }

  // 2. Apply theme colors & gym background
  applyPlaylistTheme(key);

  // 3. Set new playlist metadata & reset track index to 0 (Song #1)
  activeSource = 'spotify';
  currentSpotifyPlaylistKey = key;
  spotifyMeta = catalog[key];
  spotifyTracks = spotifyMeta.tracks || [];
  currentTrackIdx = 0;

  const targetTrack = spotifyTracks[0];
  const durSec = targetTrack ? (targetTrack.durationSec || 210) : 210;

  // 4. Reset playback position and UI to 0:00 immediately
  currentPosSec = 0;
  updateProgressUI(0, durSec);

  // 5. Update Background Theme, Selector Badges, UI Text, and Artwork
  updatePlaylistSelectorUI();
  updateSourceTabsUI();
  updateTrackUI();

  // 6. Load playlist URI into Spotify Embed controller & auto-play after 900ms
  if (spotifyEmbedController && spotifyEmbedController.loadUri && (spotifyMeta.playlistUri || (targetTrack && targetTrack.uri))) {
    const uriToLoad = spotifyMeta.playlistUri || targetTrack.uri;
    console.log('[Spotify] SPOTIFY ENTITY LOAD STARTED:', uriToLoad);
    spotifyPlaylistLoaded = false;
    try {
      spotifyEmbedController.loadUri(uriToLoad);
      console.log('[Spotify] SPOTIFY ENTITY READY:', key);
    } catch (e) {
      console.error('[Spotify] Error loading playlist URI:', e);
    }
    
    setTimeout(() => {
      if (currentToken !== playlistSwitchToken) return;
      spotifyPlaylistLoaded = true;
      if (currentSpotifyPlaylistKey === key) {
        isPlaying = true;
        updatePlayStateUI(true);
        playMusic();
      }
    }, 900);
  } else {
    isPlaying = true;
    updatePlayStateUI(true);
    playMusic();
  }

  loadTrack(0);

  const modal = document.getElementById('tracklistModal');
  if (modal && modal.classList.contains('open')) {
    renderTracklist();
  }
}

function updatePlaylistSelectorUI() {
  const mainBtns = {
    english: document.getElementById('playlistBtnEnglish'),
    hindi: document.getElementById('playlistBtnHindi'),
    punjabi: document.getElementById('playlistBtnPunjabi')
  };

  const drawerBtns = {
    english: document.getElementById('drawerBtnEnglish'),
    hindi: document.getElementById('drawerBtnHindi'),
    punjabi: document.getElementById('drawerBtnPunjabi')
  };

  ['english', 'hindi', 'punjabi'].forEach(k => {
    const isActive = k === currentSpotifyPlaylistKey && activeSource === 'spotify';
    if (mainBtns[k]) {
      if (isActive) mainBtns[k].classList.add('active');
      else mainBtns[k].classList.remove('active');
    }
    if (drawerBtns[k]) {
      if (isActive) drawerBtns[k].classList.add('active');
      else drawerBtns[k].classList.remove('active');
    }
  });
}

function updateSourceTabsUI() {
  const spotifyTabBtn = document.getElementById('tabSourceSpotify');
  const localTabBtn = document.getElementById('tabSourceLocal');
  const modalTabSpotify = document.getElementById('modalTabSpotify');
  const modalTabLocal = document.getElementById('modalTabLocal');
  const drawerPlaylistBar = document.getElementById('drawerPlaylistBar');
  
  if (activeSource === 'spotify') {
    if (spotifyTabBtn) { spotifyTabBtn.classList.add('active'); }
    if (localTabBtn) { localTabBtn.classList.remove('active'); }
    if (modalTabSpotify) { modalTabSpotify.classList.add('active'); }
    if (modalTabLocal) { modalTabLocal.classList.remove('active'); }
    document.getElementById('localAttachControls')?.classList.add('hidden');
    if (drawerPlaylistBar) drawerPlaylistBar.classList.remove('hidden');
  } else {
    if (spotifyTabBtn) { spotifyTabBtn.classList.remove('active'); }
    if (localTabBtn) { localTabBtn.classList.add('active'); }
    if (modalTabSpotify) { modalTabSpotify.classList.remove('active'); }
    if (modalTabLocal) { modalTabLocal.classList.add('active'); }
    document.getElementById('localAttachControls')?.classList.remove('hidden');
    if (drawerPlaylistBar) drawerPlaylistBar.classList.add('hidden');
  }
}

/* --------------------------------------------------------------------------
   SOURCE SWITCHER (SPOTIFY vs LOCAL FOLDER)
   -------------------------------------------------------------------------- */
function switchSource(source) {
  if (activeSource === source) return;
  
  pauseMusic();
  activeSource = source;
  currentTrackIdx = 0;
  
  updateSourceTabsUI();
  updatePlaylistSelectorUI();
  loadTrack(0);
  
  const modal = document.getElementById('tracklistModal');
  if (modal && modal.classList.contains('open')) {
    renderTracklist();
  }
}

/* --------------------------------------------------------------------------
   PLAYER CORE CONTROLS (PLAY, PAUSE, NEXT, PREV, SEEK)
   -------------------------------------------------------------------------- */
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playSpotify() {
  if (!spotifyEmbedController) {
    console.warn('Player not ready');
    showToast("Player is loading...");
    return;
  }

  if (!spotifyPlaylistLoaded) {
    console.warn('Playlist not loaded yet');
    showToast("Playlist is loading...");
    return;
  }

  try {
    // If no YouTube video has been loaded yet for the current track (e.g. very first
    // play click on page load, before any next/prev/playlist-switch happened),
    // load it now via search — after that, resume/play just controls the loaded video.
    let hasVideoLoaded = true;
    try {
      hasVideoLoaded = !!(ytPlayer && ytPlayer.getVideoData && ytPlayer.getVideoData().video_id);
    } catch (e) { hasVideoLoaded = false; }

    if (!hasVideoLoaded && spotifyEmbedController.loadUri) {
      spotifyEmbedController.loadUri();
      return;
    }

    if (spotifyEmbedController.resume) {
      spotifyEmbedController.resume().catch(error => {
        console.error('Playback resume error:', error);
      });
    } else if (spotifyEmbedController.play) {
      spotifyEmbedController.play();
    } else if (spotifyEmbedController.togglePlay) {
      spotifyEmbedController.togglePlay();
    }
  } catch (err) {
    console.error('Playback error:', err);
  }
}

function playMusic() {
  const curList = getActivePlaylist();
  
  if (activeSource === 'spotify') {
    if (localAudio && !localAudio.paused) {
      localAudio.pause();
    }
    isPlaying = true;
    updatePlayStateUI(true);
    playSpotify();
  } else {
    // Local Audio Engine
    if (curList.length === 0) {
      showToast("📁 Attach local audio files first.");
      return;
    }
    
    const track = curList[currentTrackIdx];
    if (!track || !track.src) return;

    isPlaying = true;
    updatePlayStateUI(true);

    if (spotifyEmbedController && spotifyEmbedController.pause) {
      try {
        spotifyEmbedController.pause().catch(e => console.error(e));
      } catch (e) {}
    }
    
    if (localAudio.src !== track.src && !localAudio.src.endsWith(encodeURI(track.src)) && !localAudio.src.endsWith(track.src)) {
      localAudio.src = track.src;
      localAudio.load();
    }
    localAudio.play().catch(err => {
      console.log('Local audio play notice:', err);
      isPlaying = false;
      updatePlayStateUI(false);
      showToast("Tap Play to start audio.");
    });
  }
  
  updateTracklistActiveState();
}

function pauseMusic() {
  isPlaying = false;
  updatePlayStateUI(false);
  
  if (activeSource === 'spotify') {
    if (spotifyEmbedController && spotifyEmbedController.pause) {
      try {
        spotifyEmbedController.pause().catch(e => console.error('Spotify pause error:', e));
      } catch (e) {
        console.error('Spotify pause call error:', e);
      }
    }
    if (localAudio && !localAudio.paused) {
      localAudio.pause();
    }
  } else {
    if (localAudio && !localAudio.paused) {
      localAudio.pause();
    }
  }
  
  updateTracklistActiveState();
}

function nextTrack() {
  if (isNavigatingTrack) return;
  isNavigatingTrack = true;
  
  const curList = getActivePlaylist();
  if (!curList || curList.length === 0) {
    isNavigatingTrack = false;
    return;
  }
  
  console.log('[Spotify] Next clicked');
  let nextIdx;
  if (isShuffle && curList.length > 1) {
    nextIdx = currentTrackIdx;
    while (nextIdx === currentTrackIdx) {
      nextIdx = Math.floor(Math.random() * curList.length);
    }
  } else {
    nextIdx = (currentTrackIdx + 1) % curList.length;
  }
  
  currentTrackIdx = nextIdx;
  const targetTrack = curList[currentTrackIdx];
  const durSec = targetTrack ? (targetTrack.durationSec || 210) : 210;

  // Reset time and progress UI to 0:00 immediately
  currentPosSec = 0;
  if (localAudio) localAudio.currentTime = 0;
  updateProgressUI(0, durSec);
  
  updateTrackUI();
  updateTracklistActiveState();
  
  if (activeSource === 'spotify') {
    if (spotifyEmbedController && targetTrack && targetTrack.uri) {
      try {
        spotifyEmbedController.loadUri(targetTrack.uri);
        setTimeout(() => {
          playSpotify();
        }, 300);
      } catch (e) {
        console.error('Error loading next track in Spotify Embed:', e);
      }
    }
  } else {
    playMusic();
  }
  
  setTimeout(() => {
    isNavigatingTrack = false;
  }, 300);
}

function prevTrack() {
  if (isNavigatingTrack) return;
  isNavigatingTrack = true;
  
  const curList = getActivePlaylist();
  if (!curList || curList.length === 0) {
    isNavigatingTrack = false;
    return;
  }
  
  console.log('[Spotify] Previous clicked');
  const prevIdx = (currentTrackIdx - 1 + curList.length) % curList.length;
  currentTrackIdx = prevIdx;
  const targetTrack = curList[currentTrackIdx];
  const durSec = targetTrack ? (targetTrack.durationSec || 210) : 210;

  // Reset time and progress UI to 0:00 immediately
  currentPosSec = 0;
  if (localAudio) localAudio.currentTime = 0;
  updateProgressUI(0, durSec);
  
  updateTrackUI();
  updateTracklistActiveState();
  
  if (activeSource === 'spotify') {
    if (spotifyEmbedController && targetTrack && targetTrack.uri) {
      try {
        spotifyEmbedController.loadUri(targetTrack.uri);
        setTimeout(() => {
          playSpotify();
        }, 300);
      } catch (e) {
        console.error('Error loading prev track in Spotify Embed:', e);
      }
    }
  } else {
    playMusic();
  }
  
  setTimeout(() => {
    isNavigatingTrack = false;
  }, 300);
}

function playTrackById(id) {
  const curList = getActivePlaylist();
  const idx = curList.findIndex(t => t.id === id);
  if (idx !== -1) {
    currentTrackIdx = idx;
    const targetTrack = curList[currentTrackIdx];
    const durSec = targetTrack ? (targetTrack.durationSec || 210) : 210;

    // Reset time and progress UI to 0:00 immediately
    currentPosSec = 0;
    if (localAudio) localAudio.currentTime = 0;
    updateProgressUI(0, durSec);

    loadTrack(currentTrackIdx);
    
    if (activeSource === 'spotify') {
      if (spotifyEmbedController && targetTrack && targetTrack.uri) {
        try {
          spotifyEmbedController.loadUri(targetTrack.uri);
          setTimeout(() => {
            playSpotify();
          }, 300);
        } catch (e) {
          console.error('Error loading track URI in Spotify Embed:', e);
        }
      }
    } else {
      playMusic();
    }
  }
}

function loadTrack(idx) {
  const curList = getActivePlaylist();
  if (!curList || curList.length === 0) {
    updateTrackUI();
    return;
  }
  
  if (idx < 0) idx = curList.length - 1;
  if (idx >= curList.length) idx = 0;
  
  currentTrackIdx = idx;
  const track = curList[currentTrackIdx];
  const durSec = track ? (track.durationSec || 210) : 210;
  
  currentPosSec = 0;
  if (localAudio) {
    localAudio.pause();
    localAudio.currentTime = 0;
  }
  
  updateTrackUI();
  
  if (activeSource === 'local' && track && track.src) {
    localAudio.src = track.src;
    localAudio.load();
  }
  
  updateProgressUI(0, durSec);
  updateTracklistActiveState();
}

function updateTrackUI() {
  const curList = getActivePlaylist();
  const track = curList[currentTrackIdx] || curList[0];
  
  const titleEl = document.getElementById('trackName');
  const artistEl = document.getElementById('trackArtist');
  const coverBg = document.getElementById('coverBg');
  const trackIdxBadge = document.getElementById('trackIdxBadge');
  const sourceBadge = document.getElementById('playerSourceBadge');
  
  if (activeSource === 'spotify') {
    if (titleEl) titleEl.innerText = track ? track.title : spotifyMeta.playlistTitle;
    if (artistEl) artistEl.innerText = track ? track.artist : spotifyMeta.playlistOwner;
    if (trackIdxBadge) {
      trackIdxBadge.innerText = `#${track ? (track.index || currentTrackIdx + 1) : 1} of ${curList.length || spotifyMeta.totalTracks || 10}`;
    }
    if (sourceBadge) {
      const pName = spotifyMeta.playlistDisplayName || 'PLAYLIST';
      sourceBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background:var(--amber-gold)"></span> ${pName} (${curList.length || spotifyMeta.totalTracks || 10})`;
      sourceBadge.className = "px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono text-[9px] font-bold flex items-center gap-1 border border-white/20";
    }
    if (coverBg) {
      const artworkUrl = (track && track.cover) ? track.cover : (spotifyMeta ? spotifyMeta.playlistCover : 'img/gym-bg.jpg');
      coverBg.style.backgroundImage = `url('${artworkUrl}')`;
    }
    document.title = `▶ ${track ? track.title : spotifyMeta.playlistTitle} | Old Skool Gym Radio`;
  } else {
    // Local Folder
    if (curList.length === 0) {
      if (titleEl) titleEl.innerText = 'No Local Songs Attached';
      if (artistEl) artistEl.innerText = 'Tap Attach Folder to add MP3/WAV files';
      if (trackIdxBadge) trackIdxBadge.innerText = '0 of 0';
      if (sourceBadge) {
        sourceBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> LOCAL FOLDER (0)`;
        sourceBadge.className = "px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold flex items-center gap-1 border border-amber-500/30";
      }
      if (coverBg) {
        coverBg.style.backgroundImage = `url('img/gym-bg.jpg')`;
      }
      document.title = `Old Skool Gym Radio`;
    } else {
      if (titleEl) titleEl.innerText = track.title;
      if (artistEl) artistEl.innerText = track.artist || 'Local Audio File';
      if (trackIdxBadge) {
        trackIdxBadge.innerText = `#${track.index || (currentTrackIdx + 1)} of ${curList.length}`;
      }
      if (sourceBadge) {
        sourceBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> LOCAL FOLDER (${curList.length})`;
        sourceBadge.className = "px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold flex items-center gap-1 border border-amber-500/30";
      }
      if (coverBg) {
        const artworkUrl = (track && track.cover) ? track.cover : 'img/gym-bg.jpg';
        coverBg.style.backgroundImage = `url('${artworkUrl}')`;
      }
      document.title = `▶ ${track.title} | Old Skool Gym Radio`;
    }
  }
}

function updatePlayStateUI(playing) {
  const icon = document.getElementById('playIcon');
  const eqBars = document.getElementById('eqBars');
  const player = document.getElementById('playerContainer');
  
  if (icon) {
    icon.innerHTML = playing
      ? `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>`
      : `<path d="M8 5v14l11-7-11-7Z"></path>`;
  }
  
  if (eqBars) {
    if (playing) eqBars.classList.add('playing');
    else eqBars.classList.remove('playing');
  }
  
  if (player) {
    if (playing) player.classList.add('playing-active');
    else player.classList.remove('playing-active');
  }
}

function updateProgressUI(cur, dur) {
  currentPosSec = cur;
  const timeNowEl = document.getElementById('timeNow');
  const timeTotalEl = document.getElementById('timeTotal');
  if (timeNowEl) timeNowEl.innerText = formatTime(cur);
  if (timeTotalEl) timeTotalEl.innerText = formatTime(dur);
  
  const pct = dur > 0 ? (cur / dur) * 100 : 0;
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = `${pct}%`;
  const pBar = document.getElementById('progressBar');
  if (pBar) pBar.setAttribute('aria-valuenow', Math.round(pct));
}

function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? '0' : ''}${sec}`;
}

function seekAudio(pct) {
  const curList = getActivePlaylist();
  const track = curList[currentTrackIdx];
  let dur;
  if (activeSource === 'local' && localAudio.duration) {
    dur = localAudio.duration;
  } else if (activeSource === 'spotify' && ytPlayer && ytPlayer.getDuration && ytPlayer.getDuration() > 0) {
    dur = ytPlayer.getDuration();
  } else {
    dur = track ? track.durationSec || 210 : 210;
  }
  const targetSec = pct * dur;
  currentPosSec = targetSec;
  
  if (activeSource === 'spotify') {
    if (spotifyEmbedController && spotifyEmbedController.seek) {
      try { spotifyEmbedController.seek(Math.round(targetSec)); } catch (e) {}
    }
  }
  
  if (localAudio && localAudio.duration) {
    localAudio.currentTime = Math.min(localAudio.duration, targetSec);
  }
  
  updateProgressUI(targetSec, dur);
}

function setVolume(val) {
  currentVolume = Math.max(0, Math.min(1, val));
  if (localAudio) localAudio.volume = currentVolume;
  
  const volIcon = document.getElementById('volumeIcon');
  if (volIcon) {
    if (currentVolume === 0) {
      volIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5V4L11 9H7zm11.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>`;
    } else if (currentVolume < 0.5) {
      volIcon.innerHTML = `<path d="M7 9v6h4l5 5V4L11 9H7zm11.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>`;
    } else {
      volIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    }
  }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById('shuffleBtn');
  if (btn) {
    if (isShuffle) {
      btn.classList.add('text-amber-400', 'bg-amber-500/20');
      btn.classList.remove('text-white/60');
    } else {
      btn.classList.remove('text-amber-400', 'bg-amber-500/20');
      btn.classList.add('text-white/60');
    }
  }
}

function toggleRepeat() {
  const btn = document.getElementById('repeatBtn');
  if (repeatMode === 'all') {
    repeatMode = 'one';
    if (btn) {
      btn.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/></svg>`;
      btn.classList.add('text-amber-400', 'bg-amber-500/20');
    }
  } else if (repeatMode === 'one') {
    repeatMode = 'none';
    if (btn) {
      btn.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>`;
      btn.classList.remove('text-amber-400', 'bg-amber-500/20');
      btn.classList.add('text-white/40');
    }
  } else {
    repeatMode = 'all';
    if (btn) {
      btn.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>`;
      btn.classList.remove('text-white/40');
      btn.classList.add('text-white/60');
    }
  }
}

/* --------------------------------------------------------------------------
   HTML5 LOCAL AUDIO ENGINE SETUP & DEDUPLICATED EVENT LISTENERS
   -------------------------------------------------------------------------- */
localAudio.addEventListener('ended', () => {
  if (activeSource !== 'local') return;
  if (repeatMode === 'one') {
    localAudio.currentTime = 0;
    localAudio.play().catch(err => console.log(err));
  } else {
    nextTrack();
  }
});

localAudio.addEventListener('play', () => {
  if (activeSource === 'local') {
    isPlaying = true;
    updatePlayStateUI(true);
    updateTracklistActiveState();
  }
});

localAudio.addEventListener('pause', () => {
  if (activeSource === 'local') {
    isPlaying = false;
    updatePlayStateUI(false);
    updateTracklistActiveState();
  }
});

localAudio.addEventListener('timeupdate', () => {
  if (activeSource === 'local' && localAudio.duration && !isNaN(localAudio.duration)) {
    updateProgressUI(localAudio.currentTime, localAudio.duration);
  }
});

localAudio.addEventListener('error', (e) => {
  if (activeSource === 'local') {
    console.warn('Local audio element error:', e);
    isPlaying = false;
    updatePlayStateUI(false);
  }
});

/* --------------------------------------------------------------------------
   ATTACH LOCAL SONG FOLDER & AUDIO FILES (Desktop & Mobile Friendly)
   -------------------------------------------------------------------------- */
function showToast(msg) {
  const toast = document.getElementById('folderAttachedToast');
  if (toast) {
    toast.innerText = msg;
    toast.classList.add('show');
    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => toast.classList.remove('show'), 4000);
  }
}

function triggerFolderInput() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (window.innerWidth < 640 && 'ontouchstart' in window);
  const folderInput = document.getElementById('folderInput');
  const fileInput = document.getElementById('fileInput');

  if (isMobile) {
    showToast("ℹ️ Opening audio file picker...");
    if (fileInput) fileInput.click();
  } else {
    if (folderInput) folderInput.click();
    else if (fileInput) fileInput.click();
  }
}

function cleanupObjectUrls() {
  createdObjectUrls.forEach(url => {
    try { URL.revokeObjectURL(url); } catch (e) {}
  });
  createdObjectUrls.clear();
}

function handleFilesSelected(fileList) {
  if (!fileList || fileList.length === 0) return;
  
  const files = Array.from(fileList).filter(f => {
    return f.type.startsWith('audio/') || 
           /\.(mp3|wav|ogg|m4a|flac|aac)$/i.test(f.name);
  });
  
  if (files.length === 0) {
    showToast("⚠️ No supported audio files (.mp3, .wav, .m4a) found.");
    return;
  }
  
  cleanupObjectUrls();
  
  const newTracks = files.map((file, idx) => {
    const objectUrl = URL.createObjectURL(file);
    createdObjectUrls.add(objectUrl);
    const cleanTitle = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    
    return {
      id: `custom_local_${Date.now()}_${idx}`,
      index: idx + 1,
      title: cleanTitle,
      artist: "Local Audio File",
      album: "ATTACHED FOLDER",
      src: objectUrl,
      cover: "img/gym-bg.jpg",
      durationSec: 180,
      isLocal: true
    };
  });
  
  localTracks = newTracks;
  switchSource('local');
  showToast(`📁 Attached ${newTracks.length} song(s) from local folder!`);
  
  currentTrackIdx = 0;
  loadTrack(0);
  playMusic();
  renderTracklist();
}

/* --------------------------------------------------------------------------
   TRACKLIST DRAWER / MODAL & SEARCH
   -------------------------------------------------------------------------- */
function openTracklistDrawer() {
  const modal = document.getElementById('tracklistModal');
  if (modal) {
    modal.classList.add('open');
    renderTracklist();
  }
}

function closeTracklistDrawer() {
  const modal = document.getElementById('tracklistModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function searchTracks(query) {
  searchQuery = (query || '').toLowerCase().trim();
  renderTracklist();
}

function updateTracklistActiveState() {
  const modal = document.getElementById('tracklistModal');
  if (!modal || !modal.classList.contains('open')) return;
  
  const curList = getActivePlaylist();
  const currentTrack = curList[currentTrackIdx];
  if (!currentTrack) return;
  
  const cards = document.querySelectorAll('.tracklist-card');
  cards.forEach(card => {
    const cardId = card.getAttribute('data-track-id');
    const isCurrent = cardId === currentTrack.id;
    if (isCurrent) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

function renderTracklist() {
  const listContainer = document.getElementById('tracksList');
  const countBadge = document.getElementById('tracklistCountBadge');
  const drawerTitle = document.getElementById('drawerSourceTitle');
  if (!listContainer) return;
  
  const curList = getActivePlaylist();
  
  if (drawerTitle) {
    drawerTitle.innerText = activeSource === 'spotify' 
      ? spotifyMeta.playlistTitle 
      : 'Local Songs Library';
  }
  
  let filtered = curList.filter(track => {
    if (!searchQuery) return true;
    return track.title.toLowerCase().includes(searchQuery) ||
           (track.artist && track.artist.toLowerCase().includes(searchQuery));
  });
  
  if (countBadge) {
    countBadge.innerText = `${filtered.length} / ${curList.length} Tracks`;
  }
  
  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12 px-4 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl">
        <div class="text-3xl mb-2">📁</div>
        <p class="text-white/80 font-bold text-sm">No songs in library</p>
        <p class="text-white/40 text-xs mt-1">Attach an audio folder to add songs here.</p>
      </div>
    `;
    return;
  }
  
  listContainer.innerHTML = filtered.map((track) => {
    const isCurrent = curList[currentTrackIdx] && curList[currentTrackIdx].id === track.id;
    const isTrackPlaying = isCurrent && isPlaying;
    
    return `
      <div class="tracklist-card ${isCurrent ? 'active' : ''} group" data-track-id="${track.id}" onclick="playTrackById('${track.id}')">
        <span class="track-num font-mono text-xs ${isCurrent ? 'text-amber-400 font-bold' : 'text-white/40'}">${track.index || ''}</span>
        
        <div class="track-thumb-wrap">
          <img src="${track.cover || spotifyMeta.playlistCover || 'img/gym-bg.jpg'}" alt="${track.title}" class="track-thumb-img" onerror="this.src='img/gym-bg.jpg'" />
          <div class="track-play-hover ${isTrackPlaying ? 'opacity-100' : ''}">
            ${isTrackPlaying 
              ? `<div class="eq-mini-amber"><span class="b1"></span><span class="b2"></span><span class="b3"></span></div>`
              : `<svg class="w-4 h-4 fill-current text-black ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7-11-7Z"></path></svg>`
            }
          </div>
        </div>
        
        <div class="track-meta-block">
          <div class="flex items-center gap-2">
            <h4 class="track-title-heading group-hover:text-amber-400 transition-colors">${track.title}</h4>
            ${isCurrent ? `<span class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold">PLAYING</span>` : ''}
            ${track.isLocal ? `<span class="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[9px] font-bold">LOCAL</span>` : ''}
          </div>
          <p class="track-artist-sub">${track.artist || 'Old Skool Gym'}</p>
        </div>
        
        <div class="track-right-actions">
          <span class="text-xs font-mono text-white/50">${formatTime(track.durationSec)}</span>
          ${track.spotifyUrl ? `
            <a href="${track.spotifyUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="p-1.5 rounded-full hover:bg-emerald-500/20 text-white/40 hover:text-emerald-400 transition-colors" title="Open in Spotify App">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.899 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.48-3.24c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.281 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2.06-1.38-.54-.18-.6.18-1.2.78-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   EVENT LISTENERS INITIALIZATION
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Main Player Controls
  document.getElementById('coverButton')?.addEventListener('click', togglePlay);
  document.getElementById('playButton')?.addEventListener('click', togglePlay);
  document.getElementById('prevButton')?.addEventListener('click', prevTrack);
  document.getElementById('nextButton')?.addEventListener('click', nextTrack);
  document.getElementById('tracklistBtn')?.addEventListener('click', openTracklistDrawer);
  document.getElementById('shuffleBtn')?.addEventListener('click', toggleShuffle);
  document.getElementById('repeatBtn')?.addEventListener('click', toggleRepeat);

  // Volume Slider
  const volumeSlider = document.getElementById('volumeSlider');
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      setVolume(parseFloat(e.target.value));
    });
  }

  // Progress Bar Seek
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      seekAudio(pct);
    });
  }

  // Folder & File Upload Inputs
  const folderInput = document.getElementById('folderInput');
  if (folderInput) {
    folderInput.addEventListener('change', (e) => {
      handleFilesSelected(e.target.files);
    });
  }

  const fileInput = document.getElementById('fileInput');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      handleFilesSelected(e.target.files);
    });
  }

  // Drag and drop audio files onto the modal dropzone
  const dropzone = document.getElementById('dropZone');
  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      }, false);
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFilesSelected(files);
    });
  }

  // Custom Background Image Input & LocalStorage restore
  const savedBg = localStorage.getItem('oldskool_custom_bg');
  if (savedBg) {
    const layerA = document.getElementById('themeBgLayerA');
    if (layerA) layerA.src = savedBg;
  } else {
    applyGymTheme(currentSpotifyPlaylistKey, true);
  }

  const bgImageInput = document.getElementById('bgImageInput');
  if (bgImageInput) {
    bgImageInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const layerA = document.getElementById('themeBgLayerA');
          const layerB = document.getElementById('themeBgLayerB');
          if (layerA) layerA.src = evt.target.result;
          if (layerB) layerB.src = evt.target.result;
          try {
            localStorage.setItem('oldskool_custom_bg', evt.target.result);
          } catch (err) {
            console.warn('Could not store background image in localStorage:', err);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Search input
  const searchInput = document.getElementById('trackSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTracks(e.target.value);
    });
  }

  // Initial UI Render
  applyPlaylistTheme(currentSpotifyPlaylistKey);
  updateTrackUI();
  updatePlaylistSelectorUI();
});

function triggerBgImageInput() {
  const input = document.getElementById('bgImageInput');
  if (input) input.click();
}
window.triggerBgImageInput = triggerBgImageInput;
