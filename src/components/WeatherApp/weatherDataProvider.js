
const apiKey = "2a0be82a8447d6c2dd6dd3c4191088af";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const lat = "43.0731";
const lon = "-89.4012";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const request = baseUrl + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

function getRequest(units) {
    const unitParam = (units == "F") ? "imperial" : "metric";
    return request + "&units=" + unitParam; 
}

export const imagePaths = {
    rain: '@/assets/weather/rain.jpeg',

}

// openweather API
export default async function loadWeatherData(units) {
    const req = getRequest(units);
    let temp = null;
    let weather = null;
    await fetch(req)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        temp = data.main.temp;
        weather = data.weather[0].main;
    })
    .catch(function() {
        // catch errors?
    });
    
    return {temp: temp, weather: weather};
}