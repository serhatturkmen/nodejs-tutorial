const { response } = require("express");

module.exports.Login = function (req, res) {
  //console.log("login");
  usernames = ["serhat", "dot", "admin"];
  res.render("auth/login", { usernames: usernames });
};
module.exports.loginPost = function (req, res) {
  //console.log("login");
  var username = req.body.username;
  var password = req.body.password;
  res.render("auth/login", { username: username, password: password });
};

module.exports.Register = function (req, res) {
  var kisi = ["Ahmet", "Mehmet", "Veli"];
  res.render("parametreli", {
    kisi: kisi,
    mesaj: "Şablon kullanımı öğreniyorum.",
  });
};

module.exports.ForgotPassword = function (req, res) {
  var kisi = ["Ahmet", "Mehmet", "Veli"];
  res.render("parametreli", {
    kisi: kisi,
    mesaj: "Şablon kullanımı öğreniyorum.",
  });
};
