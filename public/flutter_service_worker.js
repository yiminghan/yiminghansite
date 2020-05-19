'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3dfb4fc2fd1b9e83aa34d83d4d37536b",
"/": "3dfb4fc2fd1b9e83aa34d83d4d37536b",
"main.dart.js": "3347b597b3f25a6e50a2d3149a740d06",
"favicon.png": "58d8d58f234acd82de998c8c1c70967f",
"icons/Icon-192.png": "8a2b9c785f8f59f003515b143b1b0270",
"icons/Icon-512.png": "be2dac5b864e6449c295a80b2b054992",
"manifest.json": "79585c1f95669d0f957b51187447c318",
"assets/LICENSE": "98690e5bbac304d8805f63e7050c5b14",
"assets/AssetManifest.json": "14f27fe67718af41cf2c7dc74905d4af",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/nanoleaf_logo.png": "5c14000b0609abe183bca086cc1d11f1",
"assets/assets/resume_yiming.pdf": "c0e34b91cf8737efc1165dec9b96ef98",
"assets/assets/background.jpg": "5266d047338e16def6eb06c2e70d75d9",
"assets/assets/muma_logo.png": "c81b0812a1c70f9645bb3c2983da3a91",
"assets/assets/fooi_logo.jpg": "8e9ab25b8f5bb861d8817b54452ca2cf",
"assets/assets/penguin_rush_logo.png": "2a6b1308555a75034e69eb5cf50688f1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
