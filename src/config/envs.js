const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  API_KEY: process.env.API_KEY,
  URL_IP_API: process.env.URL_IP_API,
  URL_WEATHER_API: process.env.URL_WEATHER_API,
  PORT: process.env.PORT,
  CNT: process.env.CNT,
};
