const CACHE_NAME = 'creacuentos-v7';
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
  // Archivos de audio (escenarios y personajes)
  './audio/HOME-geoffharvey-magical-music-box-389086.mp3',
  './audio/CASTILLO-geoffharvey-magical-storytime-389087.mp3',
  './audio/BOSQUE-mandakimdk-xylophone-and-forest-307174.mp3',
  './audio/ISLA-alex_besss-a-pirate-343849.mp3',
  './audio/NUBE-viramiller-ethereal-magical-reverie-276713.mp3',
  './audio/MAR-musicword-bubbles-309433.mp3',
  './audio/MONTAÑA-saseendran-wind-from-the-mountain-raga-pahad-364841.mp3',
  './audio/JARDIN-46851258-musique-spring-travel-337522.mp3',
  './audio/ESTRELLAS-victorvantast-fionax27s-fairy-song-152743.mp3',
  './audio/PRINCESA-good_b_music-cinematic-fairy-tale-story-short-kikc-8698.mp3',
  './audio/CABALLERO-magiksolo-light-magic-163952.mp3',
  './audio/DRAGON-hitslab-magic-mystery-harry-potter-music-320643.mp3',
  './audio/HADA-geoffharvey-magic-in-the-air-43177.mp3',
  './audio/PIRATA-crissa-steampunk-pirates-289789.mp3',
  './audio/UNICORNIO-croxroc-flight-of-the-unicorn-instrumental-391707.mp3',
  './audio/ROBOT-hd-studio-robot-art-206392.mp3',
  './audio/SIRENA-backgroundmusicforvideos-fairy-tale-music-amazing-beautiful-magic-background-intro-theme-287517.mp3',
  './audio/CONEJITO-playlistsons-the-ukulele-magic-song-joy-and-fun-306996.mp3',
  './audio/BRUJABUENA-yana126-the-magic-vortex1-482369.mp3',
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
