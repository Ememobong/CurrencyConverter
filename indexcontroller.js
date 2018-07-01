
import idb from 'idb';
{   
    this._lostConnectionToast = null;
    this._openSocket();   
    this._registerServiceWorker();
}
indexcontroller.prototype._registerServiceWorker = function(){
    if(!navigator.serviceWorker) return

    navigator.serviceWorker.register('/sw.js').then(function(){
        console.log('Registration is ok!');
    }).catch(function(){
        console.log('registration not ok!');
    });
};
