self.addEventListener('install', function(event){
    var toCache = [
        

    ];
    event.waitUntil(
        caches.open('curConv-staticCache-v1').then(function(cache){
            return cache.addAll(
                '/',
                'js/converter.js',
                'css/stylesheet.css',
                '/Index.html'
            );
        })
    );

});
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response) return response;
            return fetch(event.request);
        })
    )

})