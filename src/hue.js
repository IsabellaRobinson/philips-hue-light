export default function LightsControle(lightOn){

    const axios = require ('axios');

const controlLight = async(lightId, on, hue, sat, bri) => {
  try {
    return await axios.put(
      // `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightId}/state`,
    `http://192.168.8.100/api/Ev-eqHdOzR9Fzt47Hd43cAIXworRLEECGn6wuszW/lights/07/state`,
      {
         on,
         ...(sat && { sat }),
         ...(bri && { bri }),
         ...(hue && { hue }),
        }
    );

  } catch(error) {
    console.error(error)
    }
  };
// controlLight(7, false)

//   const setLightsToRandomColors = async () => {
//       ids.forEach((id) => {
//           const hue = Math.floor(Math.random() * 65535) + 1;
//           const sat = 100;
//           const bri = 70;
//           controlLight(id, true, hue, sat, bri);
//       });
//   };

  // setLightsToRandomColors();
  return controlLight;
}

