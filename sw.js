const CACHE_NAME = 'creacuentos-v24';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './stories.js',
  './translations.js',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './privacy.html',
  './images/char-princesa.png',
  './images/char-caballero.png',
  './images/char-dragon.png',
  './images/char-hada.png',
  './images/char-pirata.png',
  './images/char-unicornio.png',
  './images/char-robot.png',
  './images/char-sirena.png',
  './images/char-conejito.png',
  './images/char-bruja_buena.png',
  // Archivos de audio (personajes y home)
  './audio/HOME-geoffharvey-magical-music-box-389086.mp3',
  './audio/PRINCESA-good_b_music-cinematic-fairy-tale-story-short-kikc-8698.mp3',
  './audio/PRINCESA-geoffharvey-the-princess-and-her-jewels-120679.mp3',
  './audio/CABALLERO-magiksolo-light-magic-163952.mp3',
  './audio/CABALLERO-tunetank-medieval-happy-music-412790.mp3',
  './audio/DRAGON-hitslab-magic-mystery-harry-potter-music-320643.mp3',
  './audio/DRAGON-tyufyakin-act-1-pack-your-bags-itx27s-time-to-go-455438.mp3',
  './audio/HADA-geoffharvey-magic-in-the-air-43177.mp3',
  './audio/HADA-leberch-quirky-orchestra-244600.mp3',
  './audio/PIRATA-crissa-steampunk-pirates-289789.mp3',
  './audio/PIRATAS-ebunny-pirate-adventure-361663.mp3',
  './audio/UNICORNIO-croxroc-flight-of-the-unicorn-instrumental-391707.mp3',
  './audio/UNICORNIO-hitslab-fantasy-fantasy-magic-fairy-tale-music-460585.mp3',
  './audio/ROBOT-hd-studio-robot-art-206392.mp3',
  './audio/ROBOT-raspberrymusic-arcade-hero-children-video-game-cartoon-379376.mp3',
  './audio/SIRENA-backgroundmusicforvideos-fairy-tale-music-amazing-beautiful-magic-background-intro-theme-287517.mp3',
  './audio/SIRENA-soundfreezone_24-x27a-cradle-of-winter-lightx27-443545.mp3',
  './audio/CONEJITO-playlistsons-the-ukulele-magic-song-joy-and-fun-306996.mp3',
  './audio/CONEJITO-geoffharvey-catch-that-rabbit-175651.mp3',
  './audio/BRUJABUENA-yana126-the-magic-vortex1-482369.mp3',
  './audio/BRUJABUENA-whatssmooth-the-fairy-of-crimson-light-426355.mp3',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
