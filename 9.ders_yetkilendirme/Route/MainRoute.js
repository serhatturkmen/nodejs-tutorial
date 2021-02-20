var express = require("express");
var router = express.Router();
var ctrlMain = require("../Controller/MainController");

router.get("/", ctrlMain.index);
router.get("/parametre", ctrlMain.parametre);

module.exports = router;
