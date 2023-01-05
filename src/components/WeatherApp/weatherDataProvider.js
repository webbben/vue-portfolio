
const API_KEY = "2a0be82a8447d6c2dd6dd3c4191088af";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
// Madison WI coords
const DEFAULT_LAT = "43.0731";
const DEFAULT_LON = "-89.4012";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//const request = baseUrl + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

function getRequest(units, lat, lon) {
    if (!lat || ! lon) {
        lat = DEFAULT_LAT;
        lon = DEFAULT_LON;
    }

    const unitParam = (units == "F") ? "imperial" : "metric";
    const request = BASE_URL + "lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;
    return request + "&units=" + unitParam; 
}

const weatherIcons = {
    clear: "mdi-weather-sunny",
    clouds: "mdi-weather-cloudy",
    wind: "mdi-weather-windy",
    drizzle: "mdi-weather-rainy",
    rain: "mdi-weather-pouring",
    thunderstorm: "mdi-weather-lightning",
    snow: "mdi-weather-snowy",
    atmosphere: "mdi-weather-fog",
    unknown: "mdi-weather-cloudy-clock"
}

function getWeatherIcon(code) {
    const category = resolveWeatherCode(code);
    return weatherIcons[category];
}

/**
 * gives the weather category for a given weather code.
 * @param {String} code 
 * @returns weather category
 */
function resolveWeatherCode(code) {
    if (code >= 200 & code < 300) {
        return 'thunderstorm';
    }
    if (code >= 300 & code < 400) {
        return 'drizzle';
    }
    if (code >= 500 & code < 600) {
        return 'rain';
    }
    if (code >= 600 & code < 700) {
        return 'snow';
    }
    if (code >= 700 & code < 800) {
        return 'atmosphere';
    }
    if (code == 800) {
        return 'clear';
    }
    if (code > 800 & code <= 804) {
        return 'clouds';
    }
    return 'unknown';
}

function getCoords() {
    if (!navigator.geolocation) {
        return;
    }

    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

/**
 * openweather api
 * @param {String} units units for measurements
 * @returns object containing temperature and weather properties
 */
export default async function loadWeatherData(units) {
    // get location
    let lat = null;
    let lon = null;
    try {
        const position = await getCoords();
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(position);
    } catch (err) {
        console.log(err.message);
    }

    const req = getRequest(units, lat, lon);
    let temp = null;
    let weather = null;
    let weatherCode = null;
    let weatherIcon = null;
    await fetch(req)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        temp = Math.round(data.main.temp * 10) / 10;
        weather = data.weather[0].main;
        weatherCode = data.weather[0].id
    })
    .catch(function() {
        // catch errors?
    });

    weatherIcon = getWeatherIcon(weatherCode);
    
    
    return {temp: temp, 
            weather: weather,
            icon: weatherIcon};
}