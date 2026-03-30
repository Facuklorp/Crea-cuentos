const CACHE_NAME = 'creacuentos-v5';
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
  './images/char-bruja_buena.png'
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
