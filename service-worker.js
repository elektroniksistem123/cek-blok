const CACHE_NAME='cek-blok-gps-c9e9cbd64afe';
const CORE=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE_NAME).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const page=e.request.mode==='navigate';if(page){e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const q=r.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html',q));return r;}).catch(()=>caches.match('./index.html')));return;}e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{if(r.ok||r.type==='opaque'){const q=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,q));}return r;})));});
