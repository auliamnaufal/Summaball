const CACHE_NAME = "summaball-v2";
var urlsToCache = [
  "/",
  "/css/main.css",
  "/css/materialize.min.css",
  "/img/header-person.png",
  "/img/logo.png",
  "/img/pp.jpg",
  "/img/splash-logo-512.png",
  "/img/splash-logo-192.png",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/pages/contact.html",
  "/pages/home.html",
  "/pages/saved.html",
  "/pages/sidenav.html",
  "/pages/topnav.html",
  "/index.html",
  "/manifest.json",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log("ServiceWorker: Menarik data: ", event.request.url);

      if (response) {
        console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
        return response;
      }

      console.log(
        "ServiceWorker: Memuat aset dari server: ",
        event.request.url
      );
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    self.clients.claim(),
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
