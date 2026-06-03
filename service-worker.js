const CACHE_NAME = "piano-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./note.html",
  "./sound.html",
  "./finger.html",
  "./style.css",
  "./app.js",
  "./sound.js",
  "./finger.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});