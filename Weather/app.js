const { UI } = require("winjs");

// Init weather object
const weather = new Weather('Boston', 'MA');

//weather.changeLocation('Miami', 'FL');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

weather.getWeather()
weather.getWeather()
.then(results => {
  ui.paint(results);
})
.catch(err => console.log(err));