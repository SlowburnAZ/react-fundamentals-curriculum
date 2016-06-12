var axios = require('axios');

var _BASEURL = "http://api.openweathermap.org/data/2.5/";
var _APIKEY = "ca4f4119f1c4ee43036d5812137048d0";

function getCurrentWeather(city) {
    return axios.get(_BASEURL + 'weather?q=' + city + '&type=accurate&APPID=' + _APIKEY)
        .then(function(currentWeatherData) {
            console.log(currentWeatherData.data)  
        });
}

function getForecast(city) {
    return axios.get(_BASEURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + _APIKEY + '&cnt=5')
        .then(function(forecastData) {
            return forecastData.data; 
        });;
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast
};