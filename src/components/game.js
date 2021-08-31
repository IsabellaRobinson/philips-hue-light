import { useEffect } from 'react';
import LightsControle from '../hue';

export default function Game() {

// Starter ud med at slukke pæren
    function go() {
        var control = LightsControle();
        control(7, false);
// Sætter en random tid på. Tid er i milisekunder.
        setTimeout(() => {
            control(7, true, 1);
        }, (Math.floor(Math.random() * 4000)) + 2000);
    }

// Lytter efter hvad den skal gøre. Dvs. her hvis man tykker b.la. space bliver farven i pæren blå osv.
    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if (e.key === " ") {
               var control = LightsControle();
               control(7, true, 45300, 254, 254)
            }
            if (e.key === "y") {
                var control = LightsControle();
                control(7, true, 15300, 254, 154)
             }
             if (e.key === "p") {
                var control = LightsControle();
                control(7, true, 55000, 254, 254)
             }
             if (e.key === "g") {
                var control = LightsControle();
                control(7, true, 22348, 254, 154)
             }
             if (e.key === "b") {
                var control = LightsControle();
                control(7, true, 34040, 254, 254)
             }
             if (e.key === "o") {
                var control = LightsControle();
                control(7, true, 7827, 254, 154)
             }
             if (e.key === "a") {
                var control = LightsControle();
                control(7, true, 49698, 254, 254)
             }
             if (e.key === "Backspace") {
                var control = LightsControle();
                control(7, true, 56797, 254, 154)
             }
             if (e.key === "Enter") {
                var control = LightsControle();
                control(7, true, 1, 254, 154)
             }

            console.log(e.key);
        })
    }, []);


    return (
        <div className="gameStart" onClick={go}>
            GO!
        </div>
    )
}