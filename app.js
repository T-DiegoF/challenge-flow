const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

const path = require("path");
const cookieParser = require("cookie-parser");
const { PORT } = require("./src/config/envs");

let indexRouter = require("./src/routes/index");
let routerWeather = require("./src/routes/routes");

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

app.set('trust proxy', true)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/api", routerWeather);

module.exports = app;
