var express = require("express");
var router = express.Router();
var ctrlAuth = require("../Controller/AuthController");

router.get("/login", ctrlAuth.Login);
router.post("/login", ctrlAuth.loginPost);
router.get("/register", ctrlAuth.Register);
router.get("/forgotpassword", ctrlAuth.ForgotPassword);

module.exports = router;
