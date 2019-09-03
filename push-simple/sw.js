

// Immediately claim any new clients. This is not needed to send messages, but
// makes for a better demo experience since the user does not need to refresh.
// A more complete example of this given in the immediate-claim recipe.
self.addEventListener('activate', function (event) {
    console.log('SW: activate ...????????????');

    setInterval(function () {
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Alea iacta est: ' + new Date().toString(),
        })

    }, 3000);

    event.waitUntil(self.clients.claim());
});

