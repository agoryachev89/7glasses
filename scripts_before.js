if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
        console.log('Service worker registration failed, error:', error);
    });
}

const glasses = ['common', 'invest', 'enjoy', 'learn', 'buy', 'gift', 'save']
glasses.forEach((element) => {
    if (!localStorage.getItem(element)) {
        localStorage.setItem(element, 0)
    }
})