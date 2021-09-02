import { useEffect } from 'react';
import LightsControle from '../hue';

import '../style/keyUp.css';

export default function KeyUpFunction() {

    var control = LightsControle();
// Starter ud med at slukke pæren
    function go() {
        control(7, false);
// Sætter en random tid på. Tid er i milisekunder.
        setTimeout(() => {
            control(7, true, 1);
        }, (Math.floor(Math.random() * 500)) + 1000);
    }

// Lytter efter hvad den skal gøre. Dvs. her hvis man tykker b.la. 'w' bliver farven i pæren hvid osv.
    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            // White
            if (e.key === "w") {
                control(7, true, 65536, 10, 60)
             }
            //  Dark blue
            if (e.key === " ") {
               control(7, true, 45390, 254, 80)
            }
            // Yellow
            if (e.key === "y") {
                control(7, true, 10376, 254, 60)
             }
            //  Purple
             if (e.key === "p") {
                control(7, true, 49152, 254, 60)
             }
            //  Green
             if (e.key === "g") {
                control(7, true, 22348, 254, 60)
             }
            //  Blue
             if (e.key === "b") {
                control(7, true, 34040, 254, 60)
             }
            //  Orange
             if (e.key === "o") {
                control(7, true, 7827, 254, 60)
             }
            //  Aqua
             if (e.key === "a") {
                control(7, true, 31675, 254, 60)
             }
            //  Brown/Orange
             if (e.key === "Backspace") {
                control(7, true, 3458, 354, 60)
             }
            //  Cadetblue
             if (e.key === "@") {
                control(7, true, 33132, 254, 60)
             }
            //  Green
            if (e.key === "i") {
                control(7, true, 23129, 254, 60)
             }
            

            console.log(e.key);
        })
    }, [control]); 
 

    return (
        <div className="clickStart" onClick={go}>
            "Tryk her for at få lys og taster til at samarbejde"
        </div>
    )
}