import LightsControle from './hue';
import { useEffect, useState } from 'react';
import Game from './components/game';

 export default function App(){
   // Notification
  useEffect(function() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
  }, []);

 

   return (
     <>
    {/* <LightsControle/> */}
    <Game/>
    </>   
    );

 }

