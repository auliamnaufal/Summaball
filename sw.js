const CACHE_NAME = "summaball-v9";
const urlsToCache = [
  "/",
  "/css/main.css",
  "/css/materialize.min.css",
  "/img/header-person.png",
  "/img/logo.png",
  "/img/pp.jpg",
  "/img/splash-logo-512.png",
  "/img/splash-logo-192.png",
  "/img/826.gif",
  "/js/api.js",
  "/js/db.js",
  "/js/idb.js",
  "/js/route.js",
  "/js/template.js",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/js/notification.js",
  "/pages/contact.html",
  "/pages/standing.html",
  "/pages/home.html",
  "/pages/saved.html",
  "/pages/sidenav.html",
  "/pages/topnav.html",
  "/pages/team.html",
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
  var base_url = "https://api.football-data.org/v2/";
  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return fetch(event.request).then(function (response) {
          cache.put(event.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    event.respondWith(
      caches
        .match(event.request, { ignoreSearch: true })
        .then(function (response) {
          return response || fetch(event.request);
        })
    );
  }
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

self.addEventListener("push", function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = "Push message no payload";
  }
  var options = {
    body: body,
    icon: "img/splash-logo-192.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification("Summaball", options)
  );
});