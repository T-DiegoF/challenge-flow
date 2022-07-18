let express = require("express");
let routerWeather = express.Router();
require("dotenv").config();
let weatherController = require("../controllers/weatherController");

routerWeather.get("/location", weatherController.getLocation);
routerWeather.get("/current/:city?", weatherController.getCurrentCity);
routerWeather.get("/forecast/:city?", weatherController.getForecast);

module.exports = routerWeather;
