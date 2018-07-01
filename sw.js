const staticCacheName = 'curConv-staticCache-v1';// indexcontroller

const findexcontroller = [

 './',

 '/index.html',

 './scripts/indexcontroller.js',

 './stylesheet.css'



];self.addEventListener('install', function(event) {

   console.log('Installing service worker.');

   event.waitUntil(

     caches.open(staticCacheName).then(function(cache) {

       console.log('service worker installed successfully.');

       return cache.addAll(indexcontroller);

     }).catch( error => console.log('failed to cache: ' + error))

   );

 });