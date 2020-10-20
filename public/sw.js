importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
  console.log('Workbox berhasil dimuat');
else 
  console.log('workbox gagal dimuat');

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/css/main.css', revision: '1' },
    { url: '/img/826.gif', revision: '1' },
    { url: '/img/logo.png', revision: '1' },
    { url: '/img/pp.jpg', revision: '1' },
    { url: '/img/splash-logo-192.png', revision: '1' },
    { url: '/img/splash-logo-512.png', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/nav.js', revision: '1' },
    { url: '/js/api.js', revision: '1' },
    { url: '/js/db.js', revision: '1' },
    { url: '/js/idb.js', revision: '1' },
    { url: '/js/notification.js', revision: '1' },
    { url: '/js/route.js', revision: '1' },
    { url: '/js/template.js', revision: '1' },
    { url: '/pages/contact.html', revision: '1' },
    { url: '/pages/home.html', revision: '1' },
    { url: '/pages/saved.html', revision: '1' },
    { url: '/pages/sidenav.html', revision: '1' },
    { url: '/pages/standing.html', revision: '1' },
    { url: '/pages/team.html', revision: '1' },
    { url: '/pages/topnav.html', revision: '1' },
    { url: '/manifest.json', revision: '1' },
]);  


workbox.routing.registerRoute(
  /https:\/\/api\.football-data\.org\/v2/,
  workbox.strategies.networkFirst({
    cacheName: 'football-data.org',
  })
);

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