let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Challenge backend Flow" });
});

module.exports = router;
