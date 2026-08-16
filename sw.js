const CACHE_NAME='residence-crystal-v2';
const urlsToCache=[
'/residence-crystal/',
'/residence-crystal/index.html',
'/residence-crystal/annonces.html',
'/residence-crystal/annonces-publiques.html'
];
self.addEventListener('install',function(e){
e.waitUntil(caches.open(CACHE_NAME).then(function(c){return c.addAll(urlsToCache)}));
self.skipWaiting()
});
self.addEventListener('fetch',function(e){
e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))
});
self.addEventListener('activate',function(e){
e.waitUntil(caches.keys().then(function(k){
return Promise.all(k.filter(function(n){return n!==CACHE_NAME}).map(function(n){return caches.delete(n)}))
}));
self.clients.claim()
});
