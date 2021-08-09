const cache_name = "DevR";
const filesToCache = ["index.html", "offline.html"];
const self = this;

// install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cache_name).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(filesToCache);
    })
  );
});

// listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// activate the service worker
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(cache_name);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
