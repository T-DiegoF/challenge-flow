const fetch = require("node-fetch");
const requestIp = require("request-ip");
require("dotenv").config();
const { API_KEY, URL_IP_API, URL_WEATHER_API, CNT } = require("../config/envs");

exports.locationService = async function (res, req,next) {
  try {
    const clientIp = requestIp.getClientIp(req); 
    const response = await fetch(`${URL_IP_API}/json/${clientIp}`);
    const json = await response.json();
    console.log("IPPPP", clientIp)
    return json;
    
  } catch (e) {
    throw new Error(e.message);
  }
};

exports.currentCityService = async function (req, res, next) {
  try {
    const city = req.params.city;
    if (!city) {
      const dataCurrentCity = await fetch(`${process.env.URL_IP_API}/json`);
      const responseCurrentCityjson = await dataCurrentCity.json();
      const lat = responseCurrentCityjson.lat;
      const lon = responseCurrentCityjson.lon;
      const dataWeather = await fetch(
        `${URL_WEATHER_API}?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
      );
      const responseWeather = await dataWeather.json();
      let data = { data: responseWeather };
      return data;
    } else {
      const dataWeather = await fetch(
        `${URL_WEATHER_API}?q=${city}&appid=${API_KEY}`
      );
      const responseWeather = await dataWeather.json();
      let data = { data: responseWeather };
      return data;
    }
  } catch (error) {
    throw new Error(e.message);
  }
};

exports.forecastService = async function (req, res, next) {
  try {
    const city = req.params.city;
    if (!city) {
      const dataCurrentCity = await fetch(`${URL_IP_API}/json`);
      const responseCurrentCityjson = await dataCurrentCity.json();
      const lat = responseCurrentCityjson.lat;
      const lon = responseCurrentCityjson.lon;
      const dataWeather = await fetch(
        `${URL_WEATHER_API}?lat=${lat}&lon=${lon}&cnt=${CNT}&appid=${API_KEY}`
      );
      const responseWeather = await dataWeather.json();
      return responseWeather;
    } else {
      const dataWeather = await fetch(
        `${URL_WEATHER_API}?q=${city}&appid=${API_KEY}`
      );
      const responseWeather = await dataWeather.json();
      return responseWeather;
    }
  } catch (error) {
    throw new Error(e.message);
  }
};
