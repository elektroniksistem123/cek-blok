const CACHE_NAME='cek-blok-v8-gps-offline-20261006';
const CORE=['./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ns=>Promise.all(ns.filter(n=>n!==CACHE_NAME).map(n=>caches.delete(n)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;if(e.request.mode==='navigate'){e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const x=r.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html',x));return r;}).catch(()=>caches.match('./index.html')));return;}e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque')){const y=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,y));}return r;})));});
