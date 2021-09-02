import { useEffect } from 'react';

import KeyUpFunction from './components/keyUp';
// import displayNotification from './notification';
import LoginForm from './components/login';

import './style/App.css';


 export default function App(){
   // Notification
  useEffect(function() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
  }, []);

  // ServiceWorker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("sw.js").then(function(registration) {
            //Hurra!
            console.log("ServiceWorker registered successfully!");
        }, function(err) {
            //Øv!
            console.log("ServiceWorker has failed!", err);
        });
    });
}

// Her udsætter vi eventet
var deferredPrompt;
window.addEventListener("beforeinstallprompt", function(event) {
    event.preventDefault();
    deferredPrompt = event;
    // showInstallPromotion();
    console.log("install prompt has been derred");
})

// Installer app'en knap
async function install(event) {
    deferredPrompt.prompt();

    var { outcome } = await deferredPrompt.userChoice;
    console.log("users responce to the prompt was", outcome);
    deferredPrompt = null;
}



   return (
     <> 
     <button onClick={install} className="installBtn">
        Install this App
    </button>
     <LoginForm/>
     {/* <dispdisplayNotification /> */}
    <KeyUpFunction/>
    </>   
    );

 }

