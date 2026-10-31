/* 여행 보따리 오프라인 작동 */
var VERSION = 'tb-1.0.1';
var SHELL = ['/', '/app.js', '/config.js', '/manifest.webmanifest', '/vendor/leaflet.js', '/vendor/leaflet.css',
  '/icons/favicon.svg', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png'];
var TILE_LIMIT = 400;

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION && k !== 'tb-tiles' && k !== 'tb-fonts'; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function trimTiles(cache) {
  return cache.keys().then(function (keys) { if (keys.length > TILE_LIMIT) return Promise.all(keys.slice(0, keys.length - TILE_LIMIT).map(function (k) { return cache.delete(k); })); });
}

self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // 환율·의견: 네트워크만 (앱이 직접 마지막 값을 보관)
  if (url.hostname.indexOf('frankfurter') >= 0 || url.hostname.indexOf('supabase') >= 0) return;

  // 지도 타일: 본 곳은 저장해 두고 오프라인에서도 보이게
  if (url.hostname === 'tile.openstreetmap.org') {
    e.respondWith(caches.open('tb-tiles').then(function (c) {
      return c.match(req).then(function (hit) {
        var net = fetch(req).then(function (r) { if (r.ok) { c.put(req, r.clone()).then(function () { trimTiles(c); }); } return r; }).catch(function () { return hit; });
        return hit || net;
      });
    }));
    return;
  }

  // 글꼴
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open('tb-fonts').then(function (c) {
      return c.match(req).then(function (hit) { return hit || fetch(req).then(function (r) { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }); });
    }).catch(function () { return new Response('', { status: 503 }); }));
    return;
  }

  if (url.origin !== self.location.origin) return;
  if (url.pathname.indexOf('/_vercel/') === 0) return;

  // 페이지: 네트워크 먼저(새 버전 반영), 안 되면 저장본
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (r) { var cp = r.clone(); caches.open(VERSION).then(function (c) { c.put('/', cp); }); return r; })
      .catch(function () { return caches.match('/'); }));
    return;
  }

  // 앱 파일: 저장본 먼저, 뒤에서 새로 받아 둠
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req).then(function (hit) {
      var net = fetch(req).then(function (r) { if (r.ok) c.put(req, r.clone()); return r; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
