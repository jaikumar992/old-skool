/* ==========================================================================
   OFFICIAL SPOTIFY PLAYLIST CATALOG (FALLBACK DATASET)
   1. English Gym (ID: 4uNqHnkmrW4Apu0U270six) - 100 tracks
   2. Hindi Gym   (ID: 1VU91WcVhly4DClcCJB0AE) - 25 tracks (real playlist total = 75; only these confirmed)
   3. Punjabi Gym (ID: 0SuqtbNBpCe3QFR8XyN63p) - 100 tracks
   Track titles / artists / IDs pulled from the live Spotify playlist pages on 2026-08-16.
   Durations are placeholders (210s) since exact runtimes aren't exposed by the public page.
   ========================================================================== */

const SPOTIFY_PLAYLISTS = {
  english: {
    playlistId: "4uNqHnkmrW4Apu0U270six",
    playlistTitle: "English Gym songs",
    playlistDisplayName: "🇬🇧 ENGLISH",
    playlistOwner: "Dev angiras",
    playlistCover: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c0de6d37c48942eb01c6c5fe5",
    playlistUri: "spotify:playlist:4uNqHnkmrW4Apu0U270six",
    playlistUrl: "https://open.spotify.com/playlist/4uNqHnkmrW4Apu0U270six",
    totalTracks: 100,
    tracks: [
      {
        id: "1XGmzt0PVuFgQYYnV2It7A",
        index: 1,
        title: "Payphone",
        artist: "Maroon 5, Wiz Khalifa",
        uri: "spotify:track:1XGmzt0PVuFgQYYnV2It7A",
        spotifyUrl: "https://open.spotify.com/track/1XGmzt0PVuFgQYYnV2It7A",
        durationSec: 210
      },
      {
        id: "2JzZzZUQj3Qff7wapcbKjc",
        index: 2,
        title: "See You Again (feat. Charlie Puth)",
        artist: "Wiz Khalifa, Charlie Puth",
        uri: "spotify:track:2JzZzZUQj3Qff7wapcbKjc",
        spotifyUrl: "https://open.spotify.com/track/2JzZzZUQj3Qff7wapcbKjc",
        durationSec: 210
      },
      {
        id: "5HCyWlXZPP0y6Gqq8TgA20",
        index: 3,
        title: "STAY (with Justin Bieber)",
        artist: "The Kid LAROI, Justin Bieber",
        uri: "spotify:track:5HCyWlXZPP0y6Gqq8TgA20",
        spotifyUrl: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20",
        durationSec: 210
      },
      {
        id: "0pqnGHJpmpxLKifKRmU6WP",
        index: 4,
        title: "Believer",
        artist: "Imagine Dragons",
        uri: "spotify:track:0pqnGHJpmpxLKifKRmU6WP",
        spotifyUrl: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP",
        durationSec: 210
      },
      {
        id: "3RiPr603aXAoi4GHyXx0uy",
        index: 5,
        title: "Hymn for the Weekend",
        artist: "Coldplay",
        uri: "spotify:track:3RiPr603aXAoi4GHyXx0uy",
        spotifyUrl: "https://open.spotify.com/track/3RiPr603aXAoi4GHyXx0uy",
        durationSec: 210
      },
      {
        id: "5cF0dROlMOK5uNZtivgu50",
        index: 6,
        title: "Attention",
        artist: "Charlie Puth",
        uri: "spotify:track:5cF0dROlMOK5uNZtivgu50",
        spotifyUrl: "https://open.spotify.com/track/5cF0dROlMOK5uNZtivgu50",
        durationSec: 210
      },
      {
        id: "6Qn5zhYkTa37e91HC1D7lb",
        index: 7,
        title: "Whatever It Takes",
        artist: "Imagine Dragons",
        uri: "spotify:track:6Qn5zhYkTa37e91HC1D7lb",
        spotifyUrl: "https://open.spotify.com/track/6Qn5zhYkTa37e91HC1D7lb",
        durationSec: 210
      },
      {
        id: "3yfqSUWxFvZELEM4PmlwIR",
        index: 8,
        title: "The Real Slim Shady",
        artist: "Eminem",
        uri: "spotify:track:3yfqSUWxFvZELEM4PmlwIR",
        spotifyUrl: "https://open.spotify.com/track/3yfqSUWxFvZELEM4PmlwIR",
        durationSec: 210
      },
      {
        id: "3CpoeW0cZSDzIRv5z34F87",
        index: 9,
        title: "Sing For The Moment",
        artist: "Eminem",
        uri: "spotify:track:3CpoeW0cZSDzIRv5z34F87",
        spotifyUrl: "https://open.spotify.com/track/3CpoeW0cZSDzIRv5z34F87",
        durationSec: 210
      },
      {
        id: "7x5xYW5W42OGPAdHUyyguy",
        index: 10,
        title: "Locked Away (feat. Adam Levine)",
        artist: "R. City, Adam Levine",
        uri: "spotify:track:7x5xYW5W42OGPAdHUyyguy",
        spotifyUrl: "https://open.spotify.com/track/7x5xYW5W42OGPAdHUyyguy",
        durationSec: 210
      },
      {
        id: "54ipXppHLA8U4yqpOFTUhr",
        index: 11,
        title: "Bones",
        artist: "Imagine Dragons",
        uri: "spotify:track:54ipXppHLA8U4yqpOFTUhr",
        spotifyUrl: "https://open.spotify.com/track/54ipXppHLA8U4yqpOFTUhr",
        durationSec: 210
      },
      {
        id: "6zDClvK9B4y3FEciNRqhR1",
        index: 12,
        title: "No Limits",
        artist: "Zayde Wølf",
        uri: "spotify:track:6zDClvK9B4y3FEciNRqhR1",
        spotifyUrl: "https://open.spotify.com/track/6zDClvK9B4y3FEciNRqhR1",
        durationSec: 210
      },
      {
        id: "3NnqyCOvU9piqJl9wQGCIN",
        index: 13,
        title: "Money Run Low",
        artist: "The Score",
        uri: "spotify:track:3NnqyCOvU9piqJl9wQGCIN",
        spotifyUrl: "https://open.spotify.com/track/3NnqyCOvU9piqJl9wQGCIN",
        durationSec: 210
      },
      {
        id: "3KkXRkHbMCARz0aVfEt68P",
        index: 14,
        title: "Sunflower - Spider-Man: Into the Spider-Verse",
        artist: "Post Malone, Swae Lee",
        uri: "spotify:track:3KkXRkHbMCARz0aVfEt68P",
        spotifyUrl: "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P",
        durationSec: 210
      },
      {
        id: "5zsHmE2gO3RefVsPyw2e3T",
        index: 15,
        title: "What's Up Danger (with Black Caviar)",
        artist: "Blackway, Black Caviar",
        uri: "spotify:track:5zsHmE2gO3RefVsPyw2e3T",
        spotifyUrl: "https://open.spotify.com/track/5zsHmE2gO3RefVsPyw2e3T",
        durationSec: 210
      },
      {
        id: "3kpYJjvM8Ja6btr5hEJLWc",
        index: 16,
        title: "Venom - Music From The Motion Picture",
        artist: "Eminem",
        uri: "spotify:track:3kpYJjvM8Ja6btr5hEJLWc",
        spotifyUrl: "https://open.spotify.com/track/3kpYJjvM8Ja6btr5hEJLWc",
        durationSec: 210
      },
      {
        id: "7lQ8MOhq6IN2w8EYcFNSUk",
        index: 17,
        title: "Without Me",
        artist: "Eminem",
        uri: "spotify:track:7lQ8MOhq6IN2w8EYcFNSUk",
        spotifyUrl: "https://open.spotify.com/track/7lQ8MOhq6IN2w8EYcFNSUk",
        durationSec: 210
      },
      {
        id: "5aAx2yezTd8zXrkmtKl66Z",
        index: 18,
        title: "Starboy",
        artist: "The Weeknd, Daft Punk",
        uri: "spotify:track:5aAx2yezTd8zXrkmtKl66Z",
        spotifyUrl: "https://open.spotify.com/track/5aAx2yezTd8zXrkmtKl66Z",
        durationSec: 210
      },
      {
        id: "0VjIjW4GlUZAMYd2vXMi3b",
        index: 19,
        title: "Blinding Lights",
        artist: "The Weeknd",
        uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
        spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
        durationSec: 210
      },
      {
        id: "3h4T9Bg8OVSUYa6danHeH5",
        index: 20,
        title: "Animals",
        artist: "Maroon 5",
        uri: "spotify:track:3h4T9Bg8OVSUYa6danHeH5",
        spotifyUrl: "https://open.spotify.com/track/3h4T9Bg8OVSUYa6danHeH5",
        durationSec: 210
      },
      {
        id: "6b8Be6ljOzmkOmFslEb23P",
        index: 21,
        title: "24K Magic",
        artist: "Bruno Mars",
        uri: "spotify:track:6b8Be6ljOzmkOmFslEb23P",
        spotifyUrl: "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
        durationSec: 210
      },
      {
        id: "1Lim1Py7xBgbAkAys3AGAG",
        index: 22,
        title: "Lean On",
        artist: "Major Lazer, DJ Snake, MØ",
        uri: "spotify:track:1Lim1Py7xBgbAkAys3AGAG",
        spotifyUrl: "https://open.spotify.com/track/1Lim1Py7xBgbAkAys3AGAG",
        durationSec: 210
      },
      {
        id: "6wmAHw1szh5RCKSRjiXhPe",
        index: 23,
        title: "How Long",
        artist: "Charlie Puth",
        uri: "spotify:track:6wmAHw1szh5RCKSRjiXhPe",
        spotifyUrl: "https://open.spotify.com/track/6wmAHw1szh5RCKSRjiXhPe",
        durationSec: 210
      },
      {
        id: "32OlwWuMpZ6b0aN2RZOeMS",
        index: 24,
        title: "Uptown Funk (feat. Bruno Mars)",
        artist: "Mark Ronson, Bruno Mars",
        uri: "spotify:track:32OlwWuMpZ6b0aN2RZOeMS",
        spotifyUrl: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
        durationSec: 210
      },
      {
        id: "7lQWRAjyhTpCWFC0jmclT4",
        index: 25,
        title: "Gangsta's Paradise",
        artist: "Coolio, L.V.",
        uri: "spotify:track:7lQWRAjyhTpCWFC0jmclT4",
        spotifyUrl: "https://open.spotify.com/track/7lQWRAjyhTpCWFC0jmclT4",
        durationSec: 210
      },
      {
        id: "3USxtqRwSYz57Ewm6wWRMp",
        index: 26,
        title: "Heat Waves",
        artist: "Glass Animals",
        uri: "spotify:track:3USxtqRwSYz57Ewm6wWRMp",
        spotifyUrl: "https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp",
        durationSec: 210
      },
      {
        id: "48QmG1dfvMuYLxMPt7KSRA",
        index: 27,
        title: "No Lie",
        artist: "Sean Paul, Dua Lipa",
        uri: "spotify:track:48QmG1dfvMuYLxMPt7KSRA",
        spotifyUrl: "https://open.spotify.com/track/48QmG1dfvMuYLxMPt7KSRA",
        durationSec: 210
      },
      {
        id: "6tMdpUXfT70TD6Eh3XfB1p",
        index: 28,
        title: "My Ordinary Life",
        artist: "The Living Tombstone",
        uri: "spotify:track:6tMdpUXfT70TD6Eh3XfB1p",
        spotifyUrl: "https://open.spotify.com/track/6tMdpUXfT70TD6Eh3XfB1p",
        durationSec: 210
      },
      {
        id: "7BKLCZ1jbUBVqRi2FVlTVw",
        index: 29,
        title: "Closer",
        artist: "The Chainsmokers, Halsey",
        uri: "spotify:track:7BKLCZ1jbUBVqRi2FVlTVw",
        spotifyUrl: "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw",
        durationSec: 210
      },
      {
        id: "378iszndTZAR4dH8kwsLC6",
        index: 30,
        title: "Cheap Thrills (feat. Sean Paul)",
        artist: "Sia, Sean Paul",
        uri: "spotify:track:378iszndTZAR4dH8kwsLC6",
        spotifyUrl: "https://open.spotify.com/track/378iszndTZAR4dH8kwsLC6",
        durationSec: 210
      },
      {
        id: "7qiZfU4dY1lWllzX7mPBI3",
        index: 31,
        title: "Shape of You",
        artist: "Ed Sheeran",
        uri: "spotify:track:7qiZfU4dY1lWllzX7mPBI3",
        spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
        durationSec: 210
      },
      {
        id: "7wMq5n8mYSKlQIGECKUgTX",
        index: 32,
        title: "Hall of Fame (feat. will.i.am)",
        artist: "The Script, will.i.am",
        uri: "spotify:track:7wMq5n8mYSKlQIGECKUgTX",
        spotifyUrl: "https://open.spotify.com/track/7wMq5n8mYSKlQIGECKUgTX",
        durationSec: 210
      },
      {
        id: "3Te8uLyit6X3ncNW8Fp3K2",
        index: 33,
        title: "Immortals",
        artist: "Fall Out Boy",
        uri: "spotify:track:3Te8uLyit6X3ncNW8Fp3K2",
        spotifyUrl: "https://open.spotify.com/track/3Te8uLyit6X3ncNW8Fp3K2",
        durationSec: 210
      },
      {
        id: "1rqqCSm0Qe4I9rUvWncaom",
        index: 34,
        title: "High Hopes",
        artist: "Panic! At The Disco",
        uri: "spotify:track:1rqqCSm0Qe4I9rUvWncaom",
        spotifyUrl: "https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom",
        durationSec: 210
      },
      {
        id: "6Knv6wdA0luoMUuuoYi2i1",
        index: 35,
        title: "My House",
        artist: "Flo Rida",
        uri: "spotify:track:6Knv6wdA0luoMUuuoYi2i1",
        spotifyUrl: "https://open.spotify.com/track/6Knv6wdA0luoMUuuoYi2i1",
        durationSec: 210
      },
      {
        id: "65Ce0h4SA18GuH6nuI1QWe",
        index: 36,
        title: "On And On",
        artist: "The Score",
        uri: "spotify:track:65Ce0h4SA18GuH6nuI1QWe",
        spotifyUrl: "https://open.spotify.com/track/65Ce0h4SA18GuH6nuI1QWe",
        durationSec: 210
      },
      {
        id: "4l9yx16yycS4h3SaneVn8i",
        index: 37,
        title: "Never Say Never",
        artist: "Sick Individuals",
        uri: "spotify:track:4l9yx16yycS4h3SaneVn8i",
        spotifyUrl: "https://open.spotify.com/track/4l9yx16yycS4h3SaneVn8i",
        durationSec: 210
      },
      {
        id: "2tpWsVSb9UEmDRxAl1zhX1",
        index: 38,
        title: "Counting Stars",
        artist: "OneRepublic",
        uri: "spotify:track:2tpWsVSb9UEmDRxAl1zhX1",
        spotifyUrl: "https://open.spotify.com/track/2tpWsVSb9UEmDRxAl1zhX1",
        durationSec: 210
      },
      {
        id: "5qaEfEh1AtSdrdrByCP7qR",
        index: 39,
        title: "Demons",
        artist: "Imagine Dragons",
        uri: "spotify:track:5qaEfEh1AtSdrdrByCP7qR",
        spotifyUrl: "https://open.spotify.com/track/5qaEfEh1AtSdrdrByCP7qR",
        durationSec: 210
      },
      {
        id: "0ct6r3EGTcMLPtrXHDvVjc",
        index: 40,
        title: "The Nights",
        artist: "Avicii",
        uri: "spotify:track:0ct6r3EGTcMLPtrXHDvVjc",
        spotifyUrl: "https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc",
        durationSec: 210
      },
      {
        id: "1zB4vmk8tFRmM9UULNzbLB",
        index: 41,
        title: "Thunder",
        artist: "Imagine Dragons",
        uri: "spotify:track:1zB4vmk8tFRmM9UULNzbLB",
        spotifyUrl: "https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB",
        durationSec: 210
      },
      {
        id: "22skzmqfdWrjJylampe0kt",
        index: 42,
        title: "Can't Hold Us (feat. Ray Dalton)",
        artist: "Macklemore, Ryan Lewis",
        uri: "spotify:track:22skzmqfdWrjJylampe0kt",
        spotifyUrl: "https://open.spotify.com/track/22skzmqfdWrjJylampe0kt",
        durationSec: 210
      },
      {
        id: "5Qjv35Ja2TDt9CXRRo51hh",
        index: 43,
        title: "Let Me Love You",
        artist: "DJ Snake, Justin Bieber",
        uri: "spotify:track:5Qjv35Ja2TDt9CXRRo51hh",
        spotifyUrl: "https://open.spotify.com/track/5Qjv35Ja2TDt9CXRRo51hh",
        durationSec: 210
      },
      {
        id: "0qOnSQQF0yzuPWsXrQ9paz",
        index: 44,
        title: "Stereo Hearts (feat. Adam Levine)",
        artist: "Gym Class Heroes, Adam Levine",
        uri: "spotify:track:0qOnSQQF0yzuPWsXrQ9paz",
        spotifyUrl: "https://open.spotify.com/track/0qOnSQQF0yzuPWsXrQ9paz",
        durationSec: 210
      },
      {
        id: "4QNpBfC0zvjKqPJcyqBy9W",
        index: 45,
        title: "Give Me Everything (feat. Nayer)",
        artist: "Pitbull, Ne-Yo",
        uri: "spotify:track:4QNpBfC0zvjKqPJcyqBy9W",
        spotifyUrl: "https://open.spotify.com/track/4QNpBfC0zvjKqPJcyqBy9W",
        durationSec: 210
      },
      {
        id: "62yJjFtgkhUrXktIoSjgP2",
        index: 46,
        title: "Radioactive",
        artist: "Imagine Dragons",
        uri: "spotify:track:62yJjFtgkhUrXktIoSjgP2",
        spotifyUrl: "https://open.spotify.com/track/62yJjFtgkhUrXktIoSjgP2",
        durationSec: 210
      },
      {
        id: "6WzRpISELf3YglGAh7TXcG",
        index: 47,
        title: "Popular (with Playboi Carti & Madonna)",
        artist: "The Weeknd, Playboi Carti",
        uri: "spotify:track:6WzRpISELf3YglGAh7TXcG",
        spotifyUrl: "https://open.spotify.com/track/6WzRpISELf3YglGAh7TXcG",
        durationSec: 210
      },
      {
        id: "2DgdHcjWmO3qd50RzuBLgZ",
        index: 48,
        title: "House of Memories",
        artist: "Panic! At The Disco",
        uri: "spotify:track:2DgdHcjWmO3qd50RzuBLgZ",
        spotifyUrl: "https://open.spotify.com/track/2DgdHcjWmO3qd50RzuBLgZ",
        durationSec: 210
      },
      {
        id: "69uxyAqqPIsUyTO8txoP2M",
        index: 49,
        title: "Adventure of a Lifetime",
        artist: "Coldplay",
        uri: "spotify:track:69uxyAqqPIsUyTO8txoP2M",
        spotifyUrl: "https://open.spotify.com/track/69uxyAqqPIsUyTO8txoP2M",
        durationSec: 210
      },
      {
        id: "5TbzAWWc5eJaANpA9kfGCd",
        index: 50,
        title: "Love Me Again",
        artist: "John Newman",
        uri: "spotify:track:5TbzAWWc5eJaANpA9kfGCd",
        spotifyUrl: "https://open.spotify.com/track/5TbzAWWc5eJaANpA9kfGCd",
        durationSec: 210
      },
      {
        id: "6cpk00i5TxCqSeqNi2HuIe",
        index: 51,
        title: "One More Night",
        artist: "Maroon 5",
        uri: "spotify:track:6cpk00i5TxCqSeqNi2HuIe",
        spotifyUrl: "https://open.spotify.com/track/6cpk00i5TxCqSeqNi2HuIe",
        durationSec: 210
      },
      {
        id: "1di1BEgJYzPvXUuinsYJGP",
        index: 52,
        title: "Everybody (Backstreet's Back) - Radio Edit",
        artist: "Backstreet Boys",
        uri: "spotify:track:1di1BEgJYzPvXUuinsYJGP",
        spotifyUrl: "https://open.spotify.com/track/1di1BEgJYzPvXUuinsYJGP",
        durationSec: 210
      },
      {
        id: "1K3LhkEvdWRPhwIXP7UBX2",
        index: 53,
        title: "WaveWalker",
        artist: "Citizen Way",
        uri: "spotify:track:1K3LhkEvdWRPhwIXP7UBX2",
        spotifyUrl: "https://open.spotify.com/track/1K3LhkEvdWRPhwIXP7UBX2",
        durationSec: 210
      },
      {
        id: "2FY7b99s15jUprqC0M5NCT",
        index: 54,
        title: "Natural",
        artist: "Imagine Dragons",
        uri: "spotify:track:2FY7b99s15jUprqC0M5NCT",
        spotifyUrl: "https://open.spotify.com/track/2FY7b99s15jUprqC0M5NCT",
        durationSec: 210
      },
      {
        id: "3F5CgOj3wFlRv51JsHbxhe",
        index: 55,
        title: "Jimmy Cooks (feat. 21 Savage)",
        artist: "Drake, 21 Savage",
        uri: "spotify:track:3F5CgOj3wFlRv51JsHbxhe",
        spotifyUrl: "https://open.spotify.com/track/3F5CgOj3wFlRv51JsHbxhe",
        durationSec: 210
      },
      {
        id: "1zi7xx7UVEFkmKfv06H8x0",
        index: 56,
        title: "One Dance",
        artist: "Drake, Wizkid",
        uri: "spotify:track:1zi7xx7UVEFkmKfv06H8x0",
        spotifyUrl: "https://open.spotify.com/track/1zi7xx7UVEFkmKfv06H8x0",
        durationSec: 210
      },
      {
        id: "7aqfrAY2p9BUSiupwk3svU",
        index: 57,
        title: "First Person Shooter (feat. J. Cole)",
        artist: "Drake, J. Cole",
        uri: "spotify:track:7aqfrAY2p9BUSiupwk3svU",
        spotifyUrl: "https://open.spotify.com/track/7aqfrAY2p9BUSiupwk3svU",
        durationSec: 210
      },
      {
        id: "5w40ZYhbBMAlHYNDaVJIUu",
        index: 58,
        title: "Chemical",
        artist: "Post Malone",
        uri: "spotify:track:5w40ZYhbBMAlHYNDaVJIUu",
        spotifyUrl: "https://open.spotify.com/track/5w40ZYhbBMAlHYNDaVJIUu",
        durationSec: 210
      },
      {
        id: "3YlodrEMMf5JP79kdPKqwp",
        index: 59,
        title: "The Heat",
        artist: "The Score",
        uri: "spotify:track:3YlodrEMMf5JP79kdPKqwp",
        spotifyUrl: "https://open.spotify.com/track/3YlodrEMMf5JP79kdPKqwp",
        durationSec: 210
      },
      {
        id: "7uCBGNn991AM68fR4tSDco",
        index: 60,
        title: "Born For This",
        artist: "The Score",
        uri: "spotify:track:7uCBGNn991AM68fR4tSDco",
        spotifyUrl: "https://open.spotify.com/track/7uCBGNn991AM68fR4tSDco",
        durationSec: 210
      },
      {
        id: "61YzdCCBPM5Pc7lIiD5i8C",
        index: 61,
        title: "Bang Bang",
        artist: "K'NAAN, Adam Levine",
        uri: "spotify:track:61YzdCCBPM5Pc7lIiD5i8C",
        spotifyUrl: "https://open.spotify.com/track/61YzdCCBPM5Pc7lIiD5i8C",
        durationSec: 210
      },
      {
        id: "7rbECVPkY5UODxoOUVKZnA",
        index: 62,
        title: "I Wonder",
        artist: "Kanye West",
        uri: "spotify:track:7rbECVPkY5UODxoOUVKZnA",
        spotifyUrl: "https://open.spotify.com/track/7rbECVPkY5UODxoOUVKZnA",
        durationSec: 210
      },
      {
        id: "2RSHsoi04658QL5xgQVov3",
        index: 63,
        title: "Bad Liar",
        artist: "Imagine Dragons",
        uri: "spotify:track:2RSHsoi04658QL5xgQVov3",
        spotifyUrl: "https://open.spotify.com/track/2RSHsoi04658QL5xgQVov3",
        durationSec: 210
      },
      {
        id: "2p8IUWQDrpjuFltbdgLOag",
        index: 64,
        title: "After Hours",
        artist: "The Weeknd",
        uri: "spotify:track:2p8IUWQDrpjuFltbdgLOag",
        spotifyUrl: "https://open.spotify.com/track/2p8IUWQDrpjuFltbdgLOag",
        durationSec: 210
      },
      {
        id: "3CRDbSIZ4r5MsZ0YwxuEkn",
        index: 65,
        title: "Stressed Out",
        artist: "Twenty One Pilots",
        uri: "spotify:track:3CRDbSIZ4r5MsZ0YwxuEkn",
        spotifyUrl: "https://open.spotify.com/track/3CRDbSIZ4r5MsZ0YwxuEkn",
        durationSec: 210
      },
      {
        id: "6DXLO8LndZMVOHM0wNbpzg",
        index: 66,
        title: "Danza Kuduro",
        artist: "Don Omar, Lucenzo",
        uri: "spotify:track:6DXLO8LndZMVOHM0wNbpzg",
        spotifyUrl: "https://open.spotify.com/track/6DXLO8LndZMVOHM0wNbpzg",
        durationSec: 210
      },
      {
        id: "6i0V12jOa3mr6uu4WYhUBr",
        index: 67,
        title: "Heathens",
        artist: "Twenty One Pilots",
        uri: "spotify:track:6i0V12jOa3mr6uu4WYhUBr",
        spotifyUrl: "https://open.spotify.com/track/6i0V12jOa3mr6uu4WYhUBr",
        durationSec: 210
      },
      {
        id: "6CjtS2JZH9RkDz5UVInsa9",
        index: 68,
        title: "Thrift Shop (feat. Wanz)",
        artist: "Macklemore & Ryan Lewis, Wanz",
        uri: "spotify:track:6CjtS2JZH9RkDz5UVInsa9",
        spotifyUrl: "https://open.spotify.com/track/6CjtS2JZH9RkDz5UVInsa9",
        durationSec: 210
      },
      {
        id: "2Z8WuEywRWYTKe1NybPQEW",
        index: 69,
        title: "Ride",
        artist: "Twenty One Pilots",
        uri: "spotify:track:2Z8WuEywRWYTKe1NybPQEW",
        spotifyUrl: "https://open.spotify.com/track/2Z8WuEywRWYTKe1NybPQEW",
        durationSec: 210
      },
      {
        id: "213x4gsFDm04hSqIUkg88w",
        index: 70,
        title: "On Top Of The World",
        artist: "Imagine Dragons",
        uri: "spotify:track:213x4gsFDm04hSqIUkg88w",
        spotifyUrl: "https://open.spotify.com/track/213x4gsFDm04hSqIUkg88w",
        durationSec: 210
      },
      {
        id: "1mea3bSkSGXuIRvnydlB5b",
        index: 71,
        title: "Viva La Vida",
        artist: "Coldplay",
        uri: "spotify:track:1mea3bSkSGXuIRvnydlB5b",
        spotifyUrl: "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b",
        durationSec: 210
      },
      {
        id: "54OR1VDpfkBuOY5zZjhZAY",
        index: 72,
        title: "YMCA - Original Version 1978",
        artist: "Village People",
        uri: "spotify:track:54OR1VDpfkBuOY5zZjhZAY",
        spotifyUrl: "https://open.spotify.com/track/54OR1VDpfkBuOY5zZjhZAY",
        durationSec: 210
      },
      {
        id: "04aAxqtGp5pv12UXAg4pkq",
        index: 73,
        title: "Centuries",
        artist: "Fall Out Boy",
        uri: "spotify:track:04aAxqtGp5pv12UXAg4pkq",
        spotifyUrl: "https://open.spotify.com/track/04aAxqtGp5pv12UXAg4pkq",
        durationSec: 210
      },
      {
        id: "15JINEqzVMv3SvJTAXAKED",
        index: 74,
        title: "Love The Way You Lie",
        artist: "Eminem, Rihanna",
        uri: "spotify:track:15JINEqzVMv3SvJTAXAKED",
        spotifyUrl: "https://open.spotify.com/track/15JINEqzVMv3SvJTAXAKED",
        durationSec: 210
      },
      {
        id: "0KAiuUOrLTIkzkpfpn9jb9",
        index: 75,
        title: "Drive By",
        artist: "Train",
        uri: "spotify:track:0KAiuUOrLTIkzkpfpn9jb9",
        spotifyUrl: "https://open.spotify.com/track/0KAiuUOrLTIkzkpfpn9jb9",
        durationSec: 210
      },
      {
        id: "09CtPGIpYB4BrO8qb1RGsF",
        index: 76,
        title: "Sorry",
        artist: "Justin Bieber",
        uri: "spotify:track:09CtPGIpYB4BrO8qb1RGsF",
        spotifyUrl: "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
        durationSec: 210
      },
      {
        id: "7Ie9W94M7OjPoZVV216Xus",
        index: 77,
        title: "Not Afraid",
        artist: "Eminem",
        uri: "spotify:track:7Ie9W94M7OjPoZVV216Xus",
        spotifyUrl: "https://open.spotify.com/track/7Ie9W94M7OjPoZVV216Xus",
        durationSec: 210
      },
      {
        id: "3aQem4jVGdhtg116TmJnHz",
        index: 78,
        title: "What's Next",
        artist: "Drake",
        uri: "spotify:track:3aQem4jVGdhtg116TmJnHz",
        spotifyUrl: "https://open.spotify.com/track/3aQem4jVGdhtg116TmJnHz",
        durationSec: 210
      },
      {
        id: "3CA9pLiwRIGtUBiMjbZmRw",
        index: 79,
        title: "Nice For What",
        artist: "Drake",
        uri: "spotify:track:3CA9pLiwRIGtUBiMjbZmRw",
        spotifyUrl: "https://open.spotify.com/track/3CA9pLiwRIGtUBiMjbZmRw",
        durationSec: 210
      },
      {
        id: "7Fv8Qp3tTSbSS2VjryUF7L",
        index: 80,
        title: "Revolution",
        artist: "The Score",
        uri: "spotify:track:7Fv8Qp3tTSbSS2VjryUF7L",
        spotifyUrl: "https://open.spotify.com/track/7Fv8Qp3tTSbSS2VjryUF7L",
        durationSec: 210
      },
      {
        id: "7q5ArsR0Yoz4Te9RyN32lK",
        index: 81,
        title: "Hunger",
        artist: "The Score",
        uri: "spotify:track:7q5ArsR0Yoz4Te9RyN32lK",
        spotifyUrl: "https://open.spotify.com/track/7q5ArsR0Yoz4Te9RyN32lK",
        durationSec: 210
      },
      {
        id: "5AU57UY8wDFicbZw8E6mw2",
        index: 82,
        title: "The Champion",
        artist: "The Score",
        uri: "spotify:track:5AU57UY8wDFicbZw8E6mw2",
        spotifyUrl: "https://open.spotify.com/track/5AU57UY8wDFicbZw8E6mw2",
        durationSec: 210
      },
      {
        id: "6t67COokESOCeqHkMNroSu",
        index: 83,
        title: "Cities",
        artist: "Throttle",
        uri: "spotify:track:6t67COokESOCeqHkMNroSu",
        spotifyUrl: "https://open.spotify.com/track/6t67COokESOCeqHkMNroSu",
        durationSec: 210
      },
      {
        id: "7yq4Qj7cqayVTp3FF9CWbm",
        index: 84,
        title: "Riptide",
        artist: "Vance Joy",
        uri: "spotify:track:7yq4Qj7cqayVTp3FF9CWbm",
        spotifyUrl: "https://open.spotify.com/track/7yq4Qj7cqayVTp3FF9CWbm",
        durationSec: 210
      },
      {
        id: "2P4OICZRVAQcYAV2JReRfj",
        index: 85,
        title: "Waiting For Love",
        artist: "Avicii",
        uri: "spotify:track:2P4OICZRVAQcYAV2JReRfj",
        spotifyUrl: "https://open.spotify.com/track/2P4OICZRVAQcYAV2JReRfj",
        durationSec: 210
      },
      {
        id: "7F8JbSCPBXm3IxMx2UMMhH",
        index: 86,
        title: "Eye of the Tiger",
        artist: "Survivor",
        uri: "spotify:track:7F8JbSCPBXm3IxMx2UMMhH",
        spotifyUrl: "https://open.spotify.com/track/7F8JbSCPBXm3IxMx2UMMhH",
        durationSec: 210
      },
      {
        id: "0j2T0R9dR9qdJYsB7ciXhf",
        index: 87,
        title: "Stronger",
        artist: "Kanye West",
        uri: "spotify:track:0j2T0R9dR9qdJYsB7ciXhf",
        spotifyUrl: "https://open.spotify.com/track/0j2T0R9dR9qdJYsB7ciXhf",
        durationSec: 210
      },
      {
        id: "4xkOaSrkexMciUUogZKVTS",
        index: 88,
        title: "Till I Collapse",
        artist: "Eminem, Nate Dogg",
        uri: "spotify:track:4xkOaSrkexMciUUogZKVTS",
        spotifyUrl: "https://open.spotify.com/track/4xkOaSrkexMciUUogZKVTS",
        durationSec: 210
      },
      {
        id: "7lDKPYiPQq7ihuNpLlUc47",
        index: 89,
        title: "Stand Alone (Alpha Version)",
        artist: "Fearless Motivation, Alpha",
        uri: "spotify:track:7lDKPYiPQq7ihuNpLlUc47",
        spotifyUrl: "https://open.spotify.com/track/7lDKPYiPQq7ihuNpLlUc47",
        durationSec: 210
      },
      {
        id: "7xQAfvXzm3AkraOtGPWIZg",
        index: 90,
        title: "Wow.",
        artist: "Post Malone",
        uri: "spotify:track:7xQAfvXzm3AkraOtGPWIZg",
        spotifyUrl: "https://open.spotify.com/track/7xQAfvXzm3AkraOtGPWIZg",
        durationSec: 210
      },
      {
        id: "4gbVRS8gloEluzf0GzDOFc",
        index: 91,
        title: "Maps",
        artist: "Maroon 5",
        uri: "spotify:track:4gbVRS8gloEluzf0GzDOFc",
        spotifyUrl: "https://open.spotify.com/track/4gbVRS8gloEluzf0GzDOFc",
        durationSec: 210
      },
      {
        id: "4SE4yewyGpOYfxfx59Yjc5",
        index: 92,
        title: "Cinderella Man",
        artist: "Eminem",
        uri: "spotify:track:4SE4yewyGpOYfxfx59Yjc5",
        spotifyUrl: "https://open.spotify.com/track/4SE4yewyGpOYfxfx59Yjc5",
        durationSec: 210
      },
      {
        id: "6RUKPb4LETWmmr3iAEQktW",
        index: 93,
        title: "Something Just Like This",
        artist: "The Chainsmokers, Coldplay",
        uri: "spotify:track:6RUKPb4LETWmmr3iAEQktW",
        spotifyUrl: "https://open.spotify.com/track/6RUKPb4LETWmmr3iAEQktW",
        durationSec: 210
      },
      {
        id: "40YcuQysJ0KlGQTeGUosTC",
        index: 94,
        title: "Me, Myself & I",
        artist: "G-Eazy, Bebe Rexha",
        uri: "spotify:track:40YcuQysJ0KlGQTeGUosTC",
        spotifyUrl: "https://open.spotify.com/track/40YcuQysJ0KlGQTeGUosTC",
        durationSec: 210
      },
      {
        id: "47BBI51FKFwOMlIiX6m8ya",
        index: 95,
        title: "I Want It That Way",
        artist: "Backstreet Boys",
        uri: "spotify:track:47BBI51FKFwOMlIiX6m8ya",
        spotifyUrl: "https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya",
        durationSec: 210
      },
      {
        id: "4dASQiO1Eoo3RJvt74FtXB",
        index: 96,
        title: "Sucker for Pain",
        artist: "Lil Wayne, Wiz Khalifa, Imagine Dragons",
        uri: "spotify:track:4dASQiO1Eoo3RJvt74FtXB",
        spotifyUrl: "https://open.spotify.com/track/4dASQiO1Eoo3RJvt74FtXB",
        durationSec: 210
      },
      {
        id: "22VdIZQfgXJea34mQxlt81",
        index: 97,
        title: "Can't Feel My Face",
        artist: "The Weeknd",
        uri: "spotify:track:22VdIZQfgXJea34mQxlt81",
        spotifyUrl: "https://open.spotify.com/track/22VdIZQfgXJea34mQxlt81",
        durationSec: 210
      },
      {
        id: "7ccC26pJ3aDG81sS4FwdXF",
        index: 98,
        title: "Remember the Name (feat. Styles of Beyond)",
        artist: "Fort Minor, Styles Of Beyond",
        uri: "spotify:track:7ccC26pJ3aDG81sS4FwdXF",
        spotifyUrl: "https://open.spotify.com/track/7ccC26pJ3aDG81sS4FwdXF",
        durationSec: 210
      },
      {
        id: "7dt6x5M1jzdTEt8oCbisTK",
        index: 99,
        title: "Better Now",
        artist: "Post Malone",
        uri: "spotify:track:7dt6x5M1jzdTEt8oCbisTK",
        spotifyUrl: "https://open.spotify.com/track/7dt6x5M1jzdTEt8oCbisTK",
        durationSec: 210
      },
      {
        id: "65pP4qMkUYdFieaUuhavoa",
        index: 100,
        title: "HeartLess",
        artist: "sad tears",
        uri: "spotify:track:65pP4qMkUYdFieaUuhavoa",
        spotifyUrl: "https://open.spotify.com/track/65pP4qMkUYdFieaUuhavoa",
        durationSec: 210
      }
    ]
  },
  hindi: {
    playlistId: "1VU91WcVhly4DClcCJB0AE",
    playlistTitle: "Gym workout Hindi songs",
    playlistDisplayName: "🇮🇳 HINDI",
    playlistOwner: "Prasad",
    playlistCover: "https://mosaic.scdn.co/640/ab67616d00001e020f8e26a782d388ea3e417d54ab67616d00001e02b2abfd2439b6c23c3664df87ab67616d00001e02b414911b2d52d2601220603aab67616d00001e02badc10f3684a57f23c26f6c1",
    playlistUri: "spotify:playlist:1VU91WcVhly4DClcCJB0AE",
    playlistUrl: "https://open.spotify.com/playlist/1VU91WcVhly4DClcCJB0AE",
    totalTracks: 25,
    tracks: [
      {
        id: "7vZz8oJ5qAqB9MghufRK5k",
        index: 1,
        title: "Zinda",
        artist: "Shankar-Ehsaan-Loy, Siddharth Mahadevan",
        uri: "spotify:track:7vZz8oJ5qAqB9MghufRK5k",
        spotifyUrl: "https://open.spotify.com/track/7vZz8oJ5qAqB9MghufRK5k",
        durationSec: 210
      },
      {
        id: "3kSBSSsXtebECjCggW87yq",
        index: 2,
        title: "Sultan",
        artist: "Vishal-Shekhar, Sukhwinder Singh, Shadab Faridi, Irshad Kamil",
        uri: "spotify:track:3kSBSSsXtebECjCggW87yq",
        spotifyUrl: "https://open.spotify.com/track/3kSBSSsXtebECjCggW87yq",
        durationSec: 210
      },
      {
        id: "7EpZ8kdKyQM4GMJy2tj0We",
        index: 3,
        title: "Dangal",
        artist: "Daler Mehndi",
        uri: "spotify:track:7EpZ8kdKyQM4GMJy2tj0We",
        spotifyUrl: "https://open.spotify.com/track/7EpZ8kdKyQM4GMJy2tj0We",
        durationSec: 210
      },
      {
        id: "3FHl1QYu76zguwjqhqcglX",
        index: 4,
        title: "Kar Har Maidaan Fateh (From \"Sanju\")",
        artist: "Sukhwinder Singh, Shreya Ghoshal, Vikram Montrose",
        uri: "spotify:track:3FHl1QYu76zguwjqhqcglX",
        spotifyUrl: "https://open.spotify.com/track/3FHl1QYu76zguwjqhqcglX",
        durationSec: 210
      },
      {
        id: "3uZiNvBNQldjl4OJiKsuxe",
        index: 5,
        title: "Brothers Anthem",
        artist: "Ajay-Atul, Vishal Dadlani",
        uri: "spotify:track:3uZiNvBNQldjl4OJiKsuxe",
        spotifyUrl: "https://open.spotify.com/track/3uZiNvBNQldjl4OJiKsuxe",
        durationSec: 210
      },
      {
        id: "3MxLT7m4BjAA0lQl9lVBcM",
        index: 6,
        title: "Jai Ho",
        artist: "A.R. Rahman, Sukhwinder Singh, Tanvi Shah, Mahalakshmi Iyer, Vijay Prakash, Gulzar",
        uri: "spotify:track:3MxLT7m4BjAA0lQl9lVBcM",
        spotifyUrl: "https://open.spotify.com/track/3MxLT7m4BjAA0lQl9lVBcM",
        durationSec: 210
      },
      {
        id: "2xYbk2WDq38a0wuRyjT1mE",
        index: 7,
        title: "Jee Karda (Rock Version)",
        artist: "Divya Kumar",
        uri: "spotify:track:2xYbk2WDq38a0wuRyjT1mE",
        spotifyUrl: "https://open.spotify.com/track/2xYbk2WDq38a0wuRyjT1mE",
        durationSec: 210
      },
      {
        id: "7k3jpyYPnVnbO0p7iejWxL",
        index: 8,
        title: "Saadda Haq",
        artist: "Mohit Chauhan",
        uri: "spotify:track:7k3jpyYPnVnbO0p7iejWxL",
        spotifyUrl: "https://open.spotify.com/track/7k3jpyYPnVnbO0p7iejWxL",
        durationSec: 210
      },
      {
        id: "01d8tSqJUrPlK1l8FwgsCF",
        index: 9,
        title: "Soorma Anthem",
        artist: "Shankar-Ehsaan-Loy, Shankar Mahadevan",
        uri: "spotify:track:01d8tSqJUrPlK1l8FwgsCF",
        spotifyUrl: "https://open.spotify.com/track/01d8tSqJUrPlK1l8FwgsCF",
        durationSec: 210
      },
      {
        id: "3pjZQfBShK7O01QvtQwmcg",
        index: 10,
        title: "Raftaarein",
        artist: "Vishal-Shekhar, Vishal Dadlani, Shekhar Ravjiani",
        uri: "spotify:track:3pjZQfBShK7O01QvtQwmcg",
        spotifyUrl: "https://open.spotify.com/track/3pjZQfBShK7O01QvtQwmcg",
        durationSec: 210
      },
      {
        id: "0KtHnXQjYkHNDsjTX3XqLc",
        index: 11,
        title: "Bhaag Milkha Bhaag - Rock Version",
        artist: "Shankar-Ehsaan-Loy, Siddharth Mahadevan",
        uri: "spotify:track:0KtHnXQjYkHNDsjTX3XqLc",
        spotifyUrl: "https://open.spotify.com/track/0KtHnXQjYkHNDsjTX3XqLc",
        durationSec: 210
      },
      {
        id: "0ls3NP6p33ZguJBvLT4o57",
        index: 12,
        title: "Chal Utth Bandeya",
        artist: "Sukhwinder Singh, Zeus, Raj Ranjodh",
        uri: "spotify:track:0ls3NP6p33ZguJBvLT4o57",
        spotifyUrl: "https://open.spotify.com/track/0ls3NP6p33ZguJBvLT4o57",
        durationSec: 210
      },
      {
        id: "5Gs6NY7QTgEq77V3DtPagv",
        index: 13,
        title: "Unstoppable Now",
        artist: "The Phantoms",
        uri: "spotify:track:5Gs6NY7QTgEq77V3DtPagv",
        spotifyUrl: "https://open.spotify.com/track/5Gs6NY7QTgEq77V3DtPagv",
        durationSec: 210
      },
      {
        id: "4FcZBCb6dANhvsEnFlgJwG",
        index: 14,
        title: "Ghamand Kar (From \"Tanhaji - The Unsung Warrior\")",
        artist: "Sachet Tandon, Parampara Tandon, Sachet-Parampara",
        uri: "spotify:track:4FcZBCb6dANhvsEnFlgJwG",
        spotifyUrl: "https://open.spotify.com/track/4FcZBCb6dANhvsEnFlgJwG",
        durationSec: 210
      },
      {
        id: "4XuVXSMJkiHJXqFsRDZ2w7",
        index: 15,
        title: "Maula Maula",
        artist: "Rooshin Dalal, Sukhwinder Singh",
        uri: "spotify:track:4XuVXSMJkiHJXqFsRDZ2w7",
        spotifyUrl: "https://open.spotify.com/track/4XuVXSMJkiHJXqFsRDZ2w7",
        durationSec: 210
      },
      {
        id: "5rNa4JvSQIUVl34hDuA39v",
        index: 16,
        title: "Get Ready To Fight Again",
        artist: "Pranaay, Ginny Diwan",
        uri: "spotify:track:5rNa4JvSQIUVl34hDuA39v",
        spotifyUrl: "https://open.spotify.com/track/5rNa4JvSQIUVl34hDuA39v",
        durationSec: 210
      },
      {
        id: "3aozKh1z4SSZXAm7TpcXtk",
        index: 17,
        title: "Maa Tujhe Salaam",
        artist: "A.R. Rahman",
        uri: "spotify:track:3aozKh1z4SSZXAm7TpcXtk",
        spotifyUrl: "https://open.spotify.com/track/3aozKh1z4SSZXAm7TpcXtk",
        durationSec: 210
      },
      {
        id: "5zlB4HfyZ4C5EbgbHPkYIN",
        index: 18,
        title: "Mila Toh Marega",
        artist: "Ravindra Upadhyay, Vishvesh Parmar, Sandeep Patil",
        uri: "spotify:track:5zlB4HfyZ4C5EbgbHPkYIN",
        spotifyUrl: "https://open.spotify.com/track/5zlB4HfyZ4C5EbgbHPkYIN",
        durationSec: 210
      },
      {
        id: "140C5VkKklxTT5TU2nKPds",
        index: 19,
        title: "Kalki - Revisted Theme",
        artist: "Jakes Bejoy",
        uri: "spotify:track:140C5VkKklxTT5TU2nKPds",
        spotifyUrl: "https://open.spotify.com/track/140C5VkKklxTT5TU2nKPds",
        durationSec: 210
      },
      {
        id: "2T09SGsKR0gAeRr5k5rfUL",
        index: 20,
        title: "Aag Hun Main",
        artist: "Santhosh Narayanan, Suraj Jagan, Arunraja Kamaraj",
        uri: "spotify:track:2T09SGsKR0gAeRr5k5rfUL",
        spotifyUrl: "https://open.spotify.com/track/2T09SGsKR0gAeRr5k5rfUL",
        durationSec: 210
      },
      {
        id: "1gjqG4t0xjcVw79NJZ1KVA",
        index: 21,
        title: "Shiva Mantra Ghanapaatha",
        artist: "Uma Mohan",
        uri: "spotify:track:1gjqG4t0xjcVw79NJZ1KVA",
        spotifyUrl: "https://open.spotify.com/track/1gjqG4t0xjcVw79NJZ1KVA",
        durationSec: 210
      },
      {
        id: "1PZZtXR7nsNIyRcqd7UeiF",
        index: 22,
        title: "Aarambh",
        artist: "Piyush Mishra",
        uri: "spotify:track:1PZZtXR7nsNIyRcqd7UeiF",
        spotifyUrl: "https://open.spotify.com/track/1PZZtXR7nsNIyRcqd7UeiF",
        durationSec: 210
      },
      {
        id: "5RH4M64x1jvPMWHN5S2LAz",
        index: 23,
        title: "Ganpat",
        artist: "Mika Singh, Anchal",
        uri: "spotify:track:5RH4M64x1jvPMWHN5S2LAz",
        spotifyUrl: "https://open.spotify.com/track/5RH4M64x1jvPMWHN5S2LAz",
        durationSec: 210
      },
      {
        id: "5s2Asrw3uWOztlOs7VHAsE",
        index: 24,
        title: "Angry Mix",
        artist: "Sukhwinder Singh, Mika Singh",
        uri: "spotify:track:5s2Asrw3uWOztlOs7VHAsE",
        spotifyUrl: "https://open.spotify.com/track/5s2Asrw3uWOztlOs7VHAsE",
        durationSec: 210
      },
      {
        id: "3n1IbkZGIxwP27kiE3TKtP",
        index: 25,
        title: "Get Ready To Fight",
        artist: "Benny Dayal, Siddharth Basrur, Pranaay",
        uri: "spotify:track:3n1IbkZGIxwP27kiE3TKtP",
        spotifyUrl: "https://open.spotify.com/track/3n1IbkZGIxwP27kiE3TKtP",
        durationSec: 210
      }
    ]
  },
  punjabi: {
    playlistId: "0SuqtbNBpCe3QFR8XyN63p",
    playlistTitle: "PUNJABI WORKOUT SONGS 2026",
    playlistDisplayName: "🟢 PUNJABI",
    playlistOwner: "SpiceUp",
    playlistCover: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72cb83c817d78b578978d01c319",
    playlistUri: "spotify:playlist:0SuqtbNBpCe3QFR8XyN63p",
    playlistUrl: "https://open.spotify.com/playlist/0SuqtbNBpCe3QFR8XyN63p",
    totalTracks: 100,
    tracks: [
      {
        id: "4CZl2BQkGPIFK99cf6jTAz",
        index: 1,
        title: "Low Fade",
        artist: "Karan Aujla, Mxrci",
        uri: "spotify:track:4CZl2BQkGPIFK99cf6jTAz",
        spotifyUrl: "https://open.spotify.com/track/4CZl2BQkGPIFK99cf6jTAz",
        durationSec: 210
      },
      {
        id: "3zoM4v1qTX94ZqfPYRReJh",
        index: 2,
        title: "Kath Lagda",
        artist: "Navaan Sandhu, Dhanda Nyoliwala",
        uri: "spotify:track:3zoM4v1qTX94ZqfPYRReJh",
        spotifyUrl: "https://open.spotify.com/track/3zoM4v1qTX94ZqfPYRReJh",
        durationSec: 210
      },
      {
        id: "7qgguh45vGEpq7Mue1xNBG",
        index: 3,
        title: "God's Favorite (feat. Sultaan)",
        artist: "Jordan Sandhu, Sultaan",
        uri: "spotify:track:7qgguh45vGEpq7Mue1xNBG",
        spotifyUrl: "https://open.spotify.com/track/7qgguh45vGEpq7Mue1xNBG",
        durationSec: 210
      },
      {
        id: "3rsEkyGaNFu1hKNEmO0HuQ",
        index: 4,
        title: "FINE SHYT",
        artist: "Guru Randhawa, Yashvi Desai",
        uri: "spotify:track:3rsEkyGaNFu1hKNEmO0HuQ",
        spotifyUrl: "https://open.spotify.com/track/3rsEkyGaNFu1hKNEmO0HuQ",
        durationSec: 210
      },
      {
        id: "4rL0ikdBsPgGF4QkOkX9YC",
        index: 5,
        title: "Sohniye",
        artist: "Shubh",
        uri: "spotify:track:4rL0ikdBsPgGF4QkOkX9YC",
        spotifyUrl: "https://open.spotify.com/track/4rL0ikdBsPgGF4QkOkX9YC",
        durationSec: 210
      },
      {
        id: "2Wtl8Lr6ZF2XSnGcakH4zG",
        index: 6,
        title: "One Call Away",
        artist: "Arjan Dhillon, Jazzy B",
        uri: "spotify:track:2Wtl8Lr6ZF2XSnGcakH4zG",
        spotifyUrl: "https://open.spotify.com/track/2Wtl8Lr6ZF2XSnGcakH4zG",
        durationSec: 210
      },
      {
        id: "7d0yDVeklf00KHvlAWylnx",
        index: 7,
        title: "Chit Tere Naal",
        artist: "Karan Vinayak",
        uri: "spotify:track:7d0yDVeklf00KHvlAWylnx",
        spotifyUrl: "https://open.spotify.com/track/7d0yDVeklf00KHvlAWylnx",
        durationSec: 210
      },
      {
        id: "6USFWgoM3skctkeaKAsHEd",
        index: 8,
        title: "Headliner",
        artist: "Navaan Sandhu, Haakam",
        uri: "spotify:track:6USFWgoM3skctkeaKAsHEd",
        spotifyUrl: "https://open.spotify.com/track/6USFWgoM3skctkeaKAsHEd",
        durationSec: 210
      },
      {
        id: "5ur5LRcVVYWfjeyfoA1asd",
        index: 9,
        title: "Sohniye",
        artist: "Karan Vinayak",
        uri: "spotify:track:5ur5LRcVVYWfjeyfoA1asd",
        spotifyUrl: "https://open.spotify.com/track/5ur5LRcVVYWfjeyfoA1asd",
        durationSec: 210
      },
      {
        id: "4PXvVQOLho0zqNaLHWqE1i",
        index: 10,
        title: "Heavyweight",
        artist: "Gurinder Gill, Jazzy B",
        uri: "spotify:track:4PXvVQOLho0zqNaLHWqE1i",
        spotifyUrl: "https://open.spotify.com/track/4PXvVQOLho0zqNaLHWqE1i",
        durationSec: 210
      },
      {
        id: "1XfBEzVsFJC0X8222Y6unk",
        index: 11,
        title: "Jogi",
        artist: "thiarajxtt, Bir",
        uri: "spotify:track:1XfBEzVsFJC0X8222Y6unk",
        spotifyUrl: "https://open.spotify.com/track/1XfBEzVsFJC0X8222Y6unk",
        durationSec: 210
      },
      {
        id: "1JioaCninhpfY1filFEIZi",
        index: 12,
        title: "STFU",
        artist: "AP Dhillon, Shinda Kahlon",
        uri: "spotify:track:1JioaCninhpfY1filFEIZi",
        spotifyUrl: "https://open.spotify.com/track/1JioaCninhpfY1filFEIZi",
        durationSec: 210
      },
      {
        id: "707dVK7TR7V5aZCIOZUAfv",
        index: 13,
        title: "Busy",
        artist: "Parmish Verma, Sultaan",
        uri: "spotify:track:707dVK7TR7V5aZCIOZUAfv",
        spotifyUrl: "https://open.spotify.com/track/707dVK7TR7V5aZCIOZUAfv",
        durationSec: 210
      },
      {
        id: "2EyifgxOMcfb0MqFsdlekD",
        index: 14,
        title: "Hood Ambience",
        artist: "Navaan Sandhu, JayB Singh",
        uri: "spotify:track:2EyifgxOMcfb0MqFsdlekD",
        spotifyUrl: "https://open.spotify.com/track/2EyifgxOMcfb0MqFsdlekD",
        durationSec: 210
      },
      {
        id: "0JOAMHwHFGKbPOwfM26fL7",
        index: 15,
        title: "Jackpot",
        artist: "Cheema Y, Gur Sidhu",
        uri: "spotify:track:0JOAMHwHFGKbPOwfM26fL7",
        spotifyUrl: "https://open.spotify.com/track/0JOAMHwHFGKbPOwfM26fL7",
        durationSec: 210
      },
      {
        id: "20BYGzIQgqafz5VqDQKd9S",
        index: 16,
        title: "Taare",
        artist: "Karan Vinayak",
        uri: "spotify:track:20BYGzIQgqafz5VqDQKd9S",
        spotifyUrl: "https://open.spotify.com/track/20BYGzIQgqafz5VqDQKd9S",
        durationSec: 210
      },
      {
        id: "3QXP18eX0P0x1mgFcsgN0C",
        index: 17,
        title: "No Control",
        artist: "Jordan Sandhu, Narinder Batth",
        uri: "spotify:track:3QXP18eX0P0x1mgFcsgN0C",
        spotifyUrl: "https://open.spotify.com/track/3QXP18eX0P0x1mgFcsgN0C",
        durationSec: 210
      },
      {
        id: "6kjrGexGBZCyuNSnsXVybn",
        index: 18,
        title: "Naggnee",
        artist: "Gurinder Gill, Manu",
        uri: "spotify:track:6kjrGexGBZCyuNSnsXVybn",
        spotifyUrl: "https://open.spotify.com/track/6kjrGexGBZCyuNSnsXVybn",
        durationSec: 210
      },
      {
        id: "5uHCw6YJdAv3LO8boVPg9p",
        index: 19,
        title: "Refugee",
        artist: "Jordan Sandhu, Kaptaan",
        uri: "spotify:track:5uHCw6YJdAv3LO8boVPg9p",
        spotifyUrl: "https://open.spotify.com/track/5uHCw6YJdAv3LO8boVPg9p",
        durationSec: 210
      },
      {
        id: "49jnvocDtzb8PETrMdv5u8",
        index: 20,
        title: "Chosen Ones",
        artist: "Gurinder Gill, NAV",
        uri: "spotify:track:49jnvocDtzb8PETrMdv5u8",
        spotifyUrl: "https://open.spotify.com/track/49jnvocDtzb8PETrMdv5u8",
        durationSec: 210
      },
      {
        id: "5WMECoazpdBfKELvWDzvT5",
        index: 21,
        title: "YVR",
        artist: "Tansaj Powar",
        uri: "spotify:track:5WMECoazpdBfKELvWDzvT5",
        spotifyUrl: "https://open.spotify.com/track/5WMECoazpdBfKELvWDzvT5",
        durationSec: 210
      },
      {
        id: "5FjO5xZr8oVLjKKnQc68VN",
        index: 22,
        title: "TENSION",
        artist: "Armaan Gill, Gurlez Akhtar",
        uri: "spotify:track:5FjO5xZr8oVLjKKnQc68VN",
        spotifyUrl: "https://open.spotify.com/track/5FjO5xZr8oVLjKKnQc68VN",
        durationSec: 210
      },
      {
        id: "2knruyExuOrofUX9oczqsk",
        index: 23,
        title: "Mi Amor",
        artist: "Shivi B",
        uri: "spotify:track:2knruyExuOrofUX9oczqsk",
        spotifyUrl: "https://open.spotify.com/track/2knruyExuOrofUX9oczqsk",
        durationSec: 210
      },
      {
        id: "5y89pQ19OoAtrINHue853I",
        index: 24,
        title: "She ain't easy",
        artist: "Navaan Sandhu, RXTRO",
        uri: "spotify:track:5y89pQ19OoAtrINHue853I",
        spotifyUrl: "https://open.spotify.com/track/5y89pQ19OoAtrINHue853I",
        durationSec: 210
      },
      {
        id: "4x8JsInrhf0yWYFRpF4vRz",
        index: 25,
        title: "Top Fella",
        artist: "Karan Aujla, Mxrci",
        uri: "spotify:track:4x8JsInrhf0yWYFRpF4vRz",
        spotifyUrl: "https://open.spotify.com/track/4x8JsInrhf0yWYFRpF4vRz",
        durationSec: 210
      },
      {
        id: "6EXYmo6wuxDey1qBV4WbJW",
        index: 26,
        title: "Enigma",
        artist: "Arjan Dhillon, Mxrci",
        uri: "spotify:track:6EXYmo6wuxDey1qBV4WbJW",
        spotifyUrl: "https://open.spotify.com/track/6EXYmo6wuxDey1qBV4WbJW",
        durationSec: 210
      },
      {
        id: "6BoXE8m9l1MLheec7Gycey",
        index: 27,
        title: "G.O.D",
        artist: "Farmaan SMG, BIG KAY SMG",
        uri: "spotify:track:6BoXE8m9l1MLheec7Gycey",
        spotifyUrl: "https://open.spotify.com/track/6BoXE8m9l1MLheec7Gycey",
        durationSec: 210
      },
      {
        id: "4B64v8p5nql70z9pDnblEh",
        index: 28,
        title: "Public Holiday",
        artist: "Jordan Sandhu, Kaptaan",
        uri: "spotify:track:4B64v8p5nql70z9pDnblEh",
        spotifyUrl: "https://open.spotify.com/track/4B64v8p5nql70z9pDnblEh",
        durationSec: 210
      },
      {
        id: "53kcU6lCvTptLec1UXacaq",
        index: 29,
        title: "Moves",
        artist: "Shubh",
        uri: "spotify:track:53kcU6lCvTptLec1UXacaq",
        spotifyUrl: "https://open.spotify.com/track/53kcU6lCvTptLec1UXacaq",
        durationSec: 210
      },
      {
        id: "4VfrGWF5qTSEIeli0aKvoJ",
        index: 30,
        title: "One In A Million",
        artist: "Jordan Sandhu, Avvy Sra",
        uri: "spotify:track:4VfrGWF5qTSEIeli0aKvoJ",
        spotifyUrl: "https://open.spotify.com/track/4VfrGWF5qTSEIeli0aKvoJ",
        durationSec: 210
      },
      {
        id: "54eRJjpGrbomPpChIlVYgy",
        index: 31,
        title: "Low Rider",
        artist: "Saabi Bhinder, Real Boss",
        uri: "spotify:track:54eRJjpGrbomPpChIlVYgy",
        spotifyUrl: "https://open.spotify.com/track/54eRJjpGrbomPpChIlVYgy",
        durationSec: 210
      },
      {
        id: "3lQPwCmD918SyoiIkw1zqx",
        index: 32,
        title: "Sifar Safar",
        artist: "Karan Aujla",
        uri: "spotify:track:3lQPwCmD918SyoiIkw1zqx",
        spotifyUrl: "https://open.spotify.com/track/3lQPwCmD918SyoiIkw1zqx",
        durationSec: 210
      },
      {
        id: "4vrnlcjMrRpTecEvdiuiAv",
        index: 33,
        title: "NO MIDMAN",
        artist: "Navaan Sandhu, Yaari Ghuman",
        uri: "spotify:track:4vrnlcjMrRpTecEvdiuiAv",
        spotifyUrl: "https://open.spotify.com/track/4vrnlcjMrRpTecEvdiuiAv",
        durationSec: 210
      },
      {
        id: "2GW2XeWQ3NWOCwHJTOy5KQ",
        index: 34,
        title: "Bounce",
        artist: "Shubh",
        uri: "spotify:track:2GW2XeWQ3NWOCwHJTOy5KQ",
        spotifyUrl: "https://open.spotify.com/track/2GW2XeWQ3NWOCwHJTOy5KQ",
        durationSec: 210
      },
      {
        id: "6md7NhikCQQRAsGF72nxIZ",
        index: 35,
        title: "Donali",
        artist: "Chxema",
        uri: "spotify:track:6md7NhikCQQRAsGF72nxIZ",
        spotifyUrl: "https://open.spotify.com/track/6md7NhikCQQRAsGF72nxIZ",
        durationSec: 210
      },
      {
        id: "6rFckZb1cuJYzsZiGHgqks",
        index: 36,
        title: "52 Bars",
        artist: "Karan Aujla, Ikky",
        uri: "spotify:track:6rFckZb1cuJYzsZiGHgqks",
        spotifyUrl: "https://open.spotify.com/track/6rFckZb1cuJYzsZiGHgqks",
        durationSec: 210
      },
      {
        id: "5bQqD45HfJE8bPgbtqhov9",
        index: 37,
        title: "Desire",
        artist: "Kranti Maan, A Klndar",
        uri: "spotify:track:5bQqD45HfJE8bPgbtqhov9",
        spotifyUrl: "https://open.spotify.com/track/5bQqD45HfJE8bPgbtqhov9",
        durationSec: 210
      },
      {
        id: "31NP3kpDutZWYcHAY4Vmze",
        index: 38,
        title: "Cartel",
        artist: "Cheema Y, Gur Sidhu",
        uri: "spotify:track:31NP3kpDutZWYcHAY4Vmze",
        spotifyUrl: "https://open.spotify.com/track/31NP3kpDutZWYcHAY4Vmze",
        durationSec: 210
      },
      {
        id: "2LXXYiF9VMEYMA4PE6GwTg",
        index: 39,
        title: "Malwa TakeOver",
        artist: "Dhanoa",
        uri: "spotify:track:2LXXYiF9VMEYMA4PE6GwTg",
        spotifyUrl: "https://open.spotify.com/track/2LXXYiF9VMEYMA4PE6GwTg",
        durationSec: 210
      },
      {
        id: "1CZ5tqaXbWcVqirwdN9WzL",
        index: 40,
        title: "LINK",
        artist: "Divrose, Prem Lata",
        uri: "spotify:track:1CZ5tqaXbWcVqirwdN9WzL",
        spotifyUrl: "https://open.spotify.com/track/1CZ5tqaXbWcVqirwdN9WzL",
        durationSec: 210
      },
      {
        id: "3P4LyMhrno1rNK8b2KD1mH",
        index: 41,
        title: "Fer Manawa (Unplugged)",
        artist: "Amzee Sandhu",
        uri: "spotify:track:3P4LyMhrno1rNK8b2KD1mH",
        spotifyUrl: "https://open.spotify.com/track/3P4LyMhrno1rNK8b2KD1mH",
        durationSec: 210
      },
      {
        id: "1xzm80yBpKXvWO1wskawIe",
        index: 42,
        title: "POWER",
        artist: "GMAFIA, Jveer",
        uri: "spotify:track:1xzm80yBpKXvWO1wskawIe",
        spotifyUrl: "https://open.spotify.com/track/1xzm80yBpKXvWO1wskawIe",
        durationSec: 210
      },
      {
        id: "27kARQjKp8j0avbncgk9xd",
        index: 43,
        title: "SFO",
        artist: "Jassa Dhaliwal, Sukh Purewal",
        uri: "spotify:track:27kARQjKp8j0avbncgk9xd",
        spotifyUrl: "https://open.spotify.com/track/27kARQjKp8j0avbncgk9xd",
        durationSec: 210
      },
      {
        id: "2Z2iU6CXXXUVKs3eqrkiKn",
        index: 44,
        title: "MAJHAIL",
        artist: "Gursharan, Real Sach",
        uri: "spotify:track:2Z2iU6CXXXUVKs3eqrkiKn",
        spotifyUrl: "https://open.spotify.com/track/2Z2iU6CXXXUVKs3eqrkiKn",
        durationSec: 210
      },
      {
        id: "5eM23jwSxRbt7XussECCVO",
        index: 45,
        title: "Don't Need Em",
        artist: "Jassi Banipal, Nayan",
        uri: "spotify:track:5eM23jwSxRbt7XussECCVO",
        spotifyUrl: "https://open.spotify.com/track/5eM23jwSxRbt7XussECCVO",
        durationSec: 210
      },
      {
        id: "179PUWKQWsM6j6c9BnQcjL",
        index: 46,
        title: "THINK IT TWICE",
        artist: "SUMIR",
        uri: "spotify:track:179PUWKQWsM6j6c9BnQcjL",
        spotifyUrl: "https://open.spotify.com/track/179PUWKQWsM6j6c9BnQcjL",
        durationSec: 210
      },
      {
        id: "1EffuiWpbTNLvEhr6dSQCM",
        index: 47,
        title: "CEO",
        artist: "Cheema Y, Gur Sidhu",
        uri: "spotify:track:1EffuiWpbTNLvEhr6dSQCM",
        spotifyUrl: "https://open.spotify.com/track/1EffuiWpbTNLvEhr6dSQCM",
        durationSec: 210
      },
      {
        id: "2krEXZTjrpiipN7niXMwGR",
        index: 48,
        title: "Khair",
        artist: "Gur Aulakh",
        uri: "spotify:track:2krEXZTjrpiipN7niXMwGR",
        spotifyUrl: "https://open.spotify.com/track/2krEXZTjrpiipN7niXMwGR",
        durationSec: 210
      },
      {
        id: "5RpyTwwWlJJ1qeL8jqwzhS",
        index: 49,
        title: "Still Active",
        artist: "Malle Ala Guri, Batth",
        uri: "spotify:track:5RpyTwwWlJJ1qeL8jqwzhS",
        spotifyUrl: "https://open.spotify.com/track/5RpyTwwWlJJ1qeL8jqwzhS",
        durationSec: 210
      },
      {
        id: "58yHr9oKceQp5HU1KyWWWh",
        index: 50,
        title: "CHLAYI JAANE",
        artist: "Divrose, ABY",
        uri: "spotify:track:58yHr9oKceQp5HU1KyWWWh",
        spotifyUrl: "https://open.spotify.com/track/58yHr9oKceQp5HU1KyWWWh",
        durationSec: 210
      },
      {
        id: "1BkCyuHnvoJuIrLXwKLVpy",
        index: 51,
        title: "Bad Company",
        artist: "Savvy Sandhu, Desi Trap Music",
        uri: "spotify:track:1BkCyuHnvoJuIrLXwKLVpy",
        spotifyUrl: "https://open.spotify.com/track/1BkCyuHnvoJuIrLXwKLVpy",
        durationSec: 210
      },
      {
        id: "7qTbfD3A4PIiBoj6Y1xdsm",
        index: 52,
        title: "Chan Wargiye",
        artist: "Lovi Boparai",
        uri: "spotify:track:7qTbfD3A4PIiBoj6Y1xdsm",
        spotifyUrl: "https://open.spotify.com/track/7qTbfD3A4PIiBoj6Y1xdsm",
        durationSec: 210
      },
      {
        id: "0wDE9NWS9C5s0wbC5DQZ7z",
        index: 53,
        title: "Opinion",
        artist: "Arjan Dhillon, Mxrci",
        uri: "spotify:track:0wDE9NWS9C5s0wbC5DQZ7z",
        spotifyUrl: "https://open.spotify.com/track/0wDE9NWS9C5s0wbC5DQZ7z",
        durationSec: 210
      },
      {
        id: "4Mr7ADvCEviJerZwOpPWpJ",
        index: 54,
        title: "Talk",
        artist: "GMAFIA, Astar 61",
        uri: "spotify:track:4Mr7ADvCEviJerZwOpPWpJ",
        spotifyUrl: "https://open.spotify.com/track/4Mr7ADvCEviJerZwOpPWpJ",
        durationSec: 210
      },
      {
        id: "2vAdSWJShWAemiRLx1Ciwh",
        index: 55,
        title: "D.C TO LAHORE",
        artist: "Noveen Morris, Bohemia",
        uri: "spotify:track:2vAdSWJShWAemiRLx1Ciwh",
        spotifyUrl: "https://open.spotify.com/track/2vAdSWJShWAemiRLx1Ciwh",
        durationSec: 210
      },
      {
        id: "0OF4PsBBczG8HBCpSWOK8W",
        index: 56,
        title: "Kajal",
        artist: "Karan Vinayak",
        uri: "spotify:track:0OF4PsBBczG8HBCpSWOK8W",
        spotifyUrl: "https://open.spotify.com/track/0OF4PsBBczG8HBCpSWOK8W",
        durationSec: 210
      },
      {
        id: "2s0atbZMhVPmdZjDSr38Vf",
        index: 57,
        title: "Tere Na",
        artist: "Jassa Dhaliwal, Sukh Purewal",
        uri: "spotify:track:2s0atbZMhVPmdZjDSr38Vf",
        spotifyUrl: "https://open.spotify.com/track/2s0atbZMhVPmdZjDSr38Vf",
        durationSec: 210
      },
      {
        id: "5ToiBU3fTszZBrLOEHY9aB",
        index: 58,
        title: "Sit Down Son",
        artist: "Navaan Sandhu, RXTRO",
        uri: "spotify:track:5ToiBU3fTszZBrLOEHY9aB",
        spotifyUrl: "https://open.spotify.com/track/5ToiBU3fTszZBrLOEHY9aB",
        durationSec: 210
      },
      {
        id: "0DDEursikduFWn9YCcbss0",
        index: 59,
        title: "Kive O",
        artist: "Armaan Multani",
        uri: "spotify:track:0DDEursikduFWn9YCcbss0",
        spotifyUrl: "https://open.spotify.com/track/0DDEursikduFWn9YCcbss0",
        durationSec: 210
      },
      {
        id: "4VzONhg2UBxyzcmOi1NFHJ",
        index: 60,
        title: "Banda Bamb",
        artist: "Jordan Sandhu, Gur Sidhu",
        uri: "spotify:track:4VzONhg2UBxyzcmOi1NFHJ",
        spotifyUrl: "https://open.spotify.com/track/4VzONhg2UBxyzcmOi1NFHJ",
        durationSec: 210
      },
      {
        id: "3V5fM7JduyWexRmsKOo6tI",
        index: 61,
        title: "TIME",
        artist: "GMAFIA",
        uri: "spotify:track:3V5fM7JduyWexRmsKOo6tI",
        spotifyUrl: "https://open.spotify.com/track/3V5fM7JduyWexRmsKOo6tI",
        durationSec: 210
      },
      {
        id: "61R60Re12uLx0WR6Fwit2D",
        index: 62,
        title: "604",
        artist: "Jassa Dhaliwal, Sukh Purewal",
        uri: "spotify:track:61R60Re12uLx0WR6Fwit2D",
        spotifyUrl: "https://open.spotify.com/track/61R60Re12uLx0WR6Fwit2D",
        durationSec: 210
      },
      {
        id: "4f3izgfNKJmB8Gc6J3A7S7",
        index: 63,
        title: "Jahaan",
        artist: "Karan Vinayak",
        uri: "spotify:track:4f3izgfNKJmB8Gc6J3A7S7",
        spotifyUrl: "https://open.spotify.com/track/4f3izgfNKJmB8Gc6J3A7S7",
        durationSec: 210
      },
      {
        id: "5XXSAqYXdWrWGhXhYZoNhn",
        index: 64,
        title: "Hikka",
        artist: "Arjan Dhillon",
        uri: "spotify:track:5XXSAqYXdWrWGhXhYZoNhn",
        spotifyUrl: "https://open.spotify.com/track/5XXSAqYXdWrWGhXhYZoNhn",
        durationSec: 210
      },
      {
        id: "4hi8IzHPkSPHBc2PWnaTXl",
        index: 65,
        title: "Kehre Raste",
        artist: "Karan Vinayak",
        uri: "spotify:track:4hi8IzHPkSPHBc2PWnaTXl",
        spotifyUrl: "https://open.spotify.com/track/4hi8IzHPkSPHBc2PWnaTXl",
        durationSec: 210
      },
      {
        id: "7lVhaFfRBvd3WjoKlAxO4x",
        index: 66,
        title: "Unstoppable Era",
        artist: "Anmol Brar",
        uri: "spotify:track:7lVhaFfRBvd3WjoKlAxO4x",
        spotifyUrl: "https://open.spotify.com/track/7lVhaFfRBvd3WjoKlAxO4x",
        durationSec: 210
      },
      {
        id: "0bjVk30ptXxieCXbgNHIWY",
        index: 67,
        title: "Stargaze",
        artist: "Ansh Chahal, JayB Singh",
        uri: "spotify:track:0bjVk30ptXxieCXbgNHIWY",
        spotifyUrl: "https://open.spotify.com/track/0bjVk30ptXxieCXbgNHIWY",
        durationSec: 210
      },
      {
        id: "1VEiS59lV1QOyfKKsZkxbK",
        index: 68,
        title: "Punjabi Thugs",
        artist: "Billa Jaan",
        uri: "spotify:track:1VEiS59lV1QOyfKKsZkxbK",
        spotifyUrl: "https://open.spotify.com/track/1VEiS59lV1QOyfKKsZkxbK",
        durationSec: 210
      },
      {
        id: "22RR3i2y4x9fnwvsIuLuA6",
        index: 69,
        title: "Iron Man",
        artist: "Kamm, Nav Prince",
        uri: "spotify:track:22RR3i2y4x9fnwvsIuLuA6",
        spotifyUrl: "https://open.spotify.com/track/22RR3i2y4x9fnwvsIuLuA6",
        durationSec: 210
      },
      {
        id: "0Y51F8Ix197jnxRXuVzF58",
        index: 70,
        title: "Face It",
        artist: "Jassa Dhaliwal, Sukh Purewal",
        uri: "spotify:track:0Y51F8Ix197jnxRXuVzF58",
        spotifyUrl: "https://open.spotify.com/track/0Y51F8Ix197jnxRXuVzF58",
        durationSec: 210
      },
      {
        id: "5s2h8rBVOXwiwCMbS0WiJy",
        index: 71,
        title: "Money Things",
        artist: "TEJ",
        uri: "spotify:track:5s2h8rBVOXwiwCMbS0WiJy",
        spotifyUrl: "https://open.spotify.com/track/5s2h8rBVOXwiwCMbS0WiJy",
        durationSec: 210
      },
      {
        id: "2Xv05vLxLwrrxCjUlMsDae",
        index: 72,
        title: "Project 2 (LOST MYSELF)",
        artist: "Joban, Harjashan",
        uri: "spotify:track:2Xv05vLxLwrrxCjUlMsDae",
        spotifyUrl: "https://open.spotify.com/track/2Xv05vLxLwrrxCjUlMsDae",
        durationSec: 210
      },
      {
        id: "0qK5bwf946pSs2Qnz5RdPj",
        index: 73,
        title: "Not So Easy",
        artist: "Hassrat, Mani Manjot",
        uri: "spotify:track:0qK5bwf946pSs2Qnz5RdPj",
        spotifyUrl: "https://open.spotify.com/track/0qK5bwf946pSs2Qnz5RdPj",
        durationSec: 210
      },
      {
        id: "1Od0qSUfUzOmztwMQpwgBj",
        index: 74,
        title: "All About Me",
        artist: "Sikkander",
        uri: "spotify:track:1Od0qSUfUzOmztwMQpwgBj",
        spotifyUrl: "https://open.spotify.com/track/1Od0qSUfUzOmztwMQpwgBj",
        durationSec: 210
      },
      {
        id: "4IaF8Y9QY1bp5LfHpBmUtn",
        index: 75,
        title: "Tu Bhuljawien",
        artist: "Karan Vinayak",
        uri: "spotify:track:4IaF8Y9QY1bp5LfHpBmUtn",
        spotifyUrl: "https://open.spotify.com/track/4IaF8Y9QY1bp5LfHpBmUtn",
        durationSec: 210
      },
      {
        id: "4dXBPlVN68bHWwojdkMuGw",
        index: 76,
        title: "Nostalgia",
        artist: "Chxnny, Y Gill",
        uri: "spotify:track:4dXBPlVN68bHWwojdkMuGw",
        spotifyUrl: "https://open.spotify.com/track/4dXBPlVN68bHWwojdkMuGw",
        durationSec: 210
      },
      {
        id: "4Jd1aHvCMnCI6wEhymS0Rc",
        index: 77,
        title: "Dhakk Champion",
        artist: "Parmish Verma, Laddi Chahal",
        uri: "spotify:track:4Jd1aHvCMnCI6wEhymS0Rc",
        spotifyUrl: "https://open.spotify.com/track/4Jd1aHvCMnCI6wEhymS0Rc",
        durationSec: 210
      },
      {
        id: "5AczhT6z2M99pdnFTsNmk7",
        index: 78,
        title: "Maverick",
        artist: "Loviex Gill",
        uri: "spotify:track:5AczhT6z2M99pdnFTsNmk7",
        spotifyUrl: "https://open.spotify.com/track/5AczhT6z2M99pdnFTsNmk7",
        durationSec: 210
      },
      {
        id: "0oBQwoSOx13KFMOCCoCZ19",
        index: 79,
        title: "Custom",
        artist: "Parmish Verma, Gurlez Akhtar",
        uri: "spotify:track:0oBQwoSOx13KFMOCCoCZ19",
        spotifyUrl: "https://open.spotify.com/track/0oBQwoSOx13KFMOCCoCZ19",
        durationSec: 210
      },
      {
        id: "7kRbWK56cRZntM6z8Y8LCm",
        index: 80,
        title: "No Debts",
        artist: "Arjan Dhillon, Mxrci",
        uri: "spotify:track:7kRbWK56cRZntM6z8Y8LCm",
        spotifyUrl: "https://open.spotify.com/track/7kRbWK56cRZntM6z8Y8LCm",
        durationSec: 210
      },
      {
        id: "1cj4y0FUFStkfdEUPyDxfx",
        index: 81,
        title: "Gears",
        artist: "Arjan Dhillon, Mxrci",
        uri: "spotify:track:1cj4y0FUFStkfdEUPyDxfx",
        spotifyUrl: "https://open.spotify.com/track/1cj4y0FUFStkfdEUPyDxfx",
        durationSec: 210
      },
      {
        id: "2wRBkdlkhtwJlRC7EAXXtJ",
        index: 82,
        title: "Glasgow",
        artist: "Gursharan",
        uri: "spotify:track:2wRBkdlkhtwJlRC7EAXXtJ",
        spotifyUrl: "https://open.spotify.com/track/2wRBkdlkhtwJlRC7EAXXtJ",
        durationSec: 210
      },
      {
        id: "2JUyoXGd0cyggRkAqyRhiL",
        index: 83,
        title: "Jail Life",
        artist: "Jas Dhaliwal, Gill Arsh",
        uri: "spotify:track:2JUyoXGd0cyggRkAqyRhiL",
        spotifyUrl: "https://open.spotify.com/track/2JUyoXGd0cyggRkAqyRhiL",
        durationSec: 210
      },
      {
        id: "4Tc99ddDURYNffbVrFq8bR",
        index: 84,
        title: "Tere Naal",
        artist: "Akhil",
        uri: "spotify:track:4Tc99ddDURYNffbVrFq8bR",
        spotifyUrl: "https://open.spotify.com/track/4Tc99ddDURYNffbVrFq8bR",
        durationSec: 210
      },
      {
        id: "4d2jV5fmX6hbRwaRbY39dt",
        index: 85,
        title: "Wavy",
        artist: "Karan Aujla, Jay Trak",
        uri: "spotify:track:4d2jV5fmX6hbRwaRbY39dt",
        spotifyUrl: "https://open.spotify.com/track/4d2jV5fmX6hbRwaRbY39dt",
        durationSec: 210
      },
      {
        id: "0x2B2iS3NXXLKjgfPYt5Il",
        index: 86,
        title: "NO PROBLEM",
        artist: "GMAFIA, Astar 61",
        uri: "spotify:track:0x2B2iS3NXXLKjgfPYt5Il",
        spotifyUrl: "https://open.spotify.com/track/0x2B2iS3NXXLKjgfPYt5Il",
        durationSec: 210
      },
      {
        id: "5UGrftqh9U3zKQUt3vs7Ob",
        index: 87,
        title: "Supreme",
        artist: "Shubh",
        uri: "spotify:track:5UGrftqh9U3zKQUt3vs7Ob",
        spotifyUrl: "https://open.spotify.com/track/5UGrftqh9U3zKQUt3vs7Ob",
        durationSec: 210
      },
      {
        id: "4ifOUBg4Mpu36QRUgzSM5L",
        index: 88,
        title: "Walk With Rats",
        artist: "Jas Dhaliwal, Space",
        uri: "spotify:track:4ifOUBg4Mpu36QRUgzSM5L",
        spotifyUrl: "https://open.spotify.com/track/4ifOUBg4Mpu36QRUgzSM5L",
        durationSec: 210
      },
      {
        id: "4kxR8oTVjX09ZBXSe0rxlt",
        index: 89,
        title: "Gaanni",
        artist: "Jaskaran Wahla, RG Cash",
        uri: "spotify:track:4kxR8oTVjX09ZBXSe0rxlt",
        spotifyUrl: "https://open.spotify.com/track/4kxR8oTVjX09ZBXSe0rxlt",
        durationSec: 210
      },
      {
        id: "5i2jG0ScOY5B40sTHMeb08",
        index: 90,
        title: "Barota",
        artist: "Sidhu Moose Wala, The Kidd",
        uri: "spotify:track:5i2jG0ScOY5B40sTHMeb08",
        spotifyUrl: "https://open.spotify.com/track/5i2jG0ScOY5B40sTHMeb08",
        durationSec: 210
      },
      {
        id: "6wkHR8cU4INbp145hngbQO",
        index: 91,
        title: "8 ASLE",
        artist: "Sukha, Chani Nattan",
        uri: "spotify:track:6wkHR8cU4INbp145hngbQO",
        spotifyUrl: "https://open.spotify.com/track/6wkHR8cU4INbp145hngbQO",
        durationSec: 210
      },
      {
        id: "69AjrdgNtObkjqZEsMh15B",
        index: 92,
        title: "Levels & Graphs",
        artist: "Navaan Sandhu, JayB Singh",
        uri: "spotify:track:69AjrdgNtObkjqZEsMh15B",
        spotifyUrl: "https://open.spotify.com/track/69AjrdgNtObkjqZEsMh15B",
        durationSec: 210
      },
      {
        id: "6YCuLdRZCAneCCrc0XqKrY",
        index: 93,
        title: "Komagata Maru",
        artist: "Cheema Y, Gur Sidhu",
        uri: "spotify:track:6YCuLdRZCAneCCrc0XqKrY",
        spotifyUrl: "https://open.spotify.com/track/6YCuLdRZCAneCCrc0XqKrY",
        durationSec: 210
      },
      {
        id: "6usJjH5NXtFoOLXep5qerd",
        index: 94,
        title: "Supne",
        artist: "Karan Vinayak",
        uri: "spotify:track:6usJjH5NXtFoOLXep5qerd",
        spotifyUrl: "https://open.spotify.com/track/6usJjH5NXtFoOLXep5qerd",
        durationSec: 210
      },
      {
        id: "6JHCz2iCn7Arxxx0GRBSov",
        index: 95,
        title: "Rebel",
        artist: "Cheema Y, Gur Sidhu",
        uri: "spotify:track:6JHCz2iCn7Arxxx0GRBSov",
        spotifyUrl: "https://open.spotify.com/track/6JHCz2iCn7Arxxx0GRBSov",
        durationSec: 210
      },
      {
        id: "2KQBM1PYjg2ZpeA5xbTjrJ",
        index: 96,
        title: "Tutor",
        artist: "Cheema Y, Gur Sidhu",
        uri: "spotify:track:2KQBM1PYjg2ZpeA5xbTjrJ",
        spotifyUrl: "https://open.spotify.com/track/2KQBM1PYjg2ZpeA5xbTjrJ",
        durationSec: 210
      },
      {
        id: "77mI75scDZpgK0gZ565FNZ",
        index: 97,
        title: "Greatest",
        artist: "Arjan Dhillon",
        uri: "spotify:track:77mI75scDZpgK0gZ565FNZ",
        spotifyUrl: "https://open.spotify.com/track/77mI75scDZpgK0gZ565FNZ",
        durationSec: 210
      },
      {
        id: "6PRFDCNAMLeSZimkPGrKMG",
        index: 98,
        title: "5-7",
        artist: "Karan Aujla, Mxrci",
        uri: "spotify:track:6PRFDCNAMLeSZimkPGrKMG",
        spotifyUrl: "https://open.spotify.com/track/6PRFDCNAMLeSZimkPGrKMG",
        durationSec: 210
      },
      {
        id: "7Ftug8fkHANhdU0FVOr89B",
        index: 99,
        title: "Love Salary",
        artist: "Cheema Y, Gur Sidhu",
        uri: "spotify:track:7Ftug8fkHANhdU0FVOr89B",
        spotifyUrl: "https://open.spotify.com/track/7Ftug8fkHANhdU0FVOr89B",
        durationSec: 210
      },
      {
        id: "3FesGRfsUlUwyEtqIVDkTe",
        index: 100,
        title: "HYPE",
        artist: "Har Gill",
        uri: "spotify:track:3FesGRfsUlUwyEtqIVDkTe",
        spotifyUrl: "https://open.spotify.com/track/3FesGRfsUlUwyEtqIVDkTe",
        durationSec: 210
      }
    ]
  }
};

const SPOTIFY_PLAYLIST_DATA = SPOTIFY_PLAYLISTS.english;
