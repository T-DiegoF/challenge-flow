var weatherService = require("../service/weatherService");

exports.getLocation = async function (req, res) {
  try {
    result = await weatherService.locationService(req, res);
    res.send(result).status(200);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

exports.getCurrentCity = async function (req, res) {
  try {
    result = await weatherService.currentCityService(req, res);
    res.send(result).status(200);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

exports.getForecast = async function (req, res) {
  try {
    result = await weatherService.forecastService(req, res);
    res.send(result).status(200);
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};
