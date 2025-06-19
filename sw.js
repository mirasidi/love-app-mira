// sw.js — Service Worker asas

self.addEventListener('install', function(event) {
  console.log('Service Worker installed.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated.');
});

self.addEventListener('fetch', function(event) {
  // Boleh tambah cache jika perlu
  return;
});
