const CACHE_NAME = 'cek-blok-v1';
const APP_FILES = ['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if(response && (response.ok || response.type === 'opaque')){
      const copy=response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request,copy));
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
