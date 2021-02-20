var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

//şablon kullanılması için kütüphaneyi değişkene aktarma
var ejsLayout = require("express-ejs-layouts");

//şablon kullanılacağının belirtilmesi
app.use(ejsLayout);

// body-parse kullanımı
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// görüntüleme motoronu belirtilmesi
app.set("view engine", "ejs");

// ejs dosyalarının bulunduğu konum
app.set("views", path.join(__dirname, "./views"));

/*
gelen her isteğe karşı loglama yapar.
*/
app.use(function (req, res, next) {
  console.log("-------------");
  console.log("Gelen istek.:" + req.url);
  var datetime = new Date();
  console.log("Zamanı......:" + datetime);
  console.log("-------------");
  next();
});

require("./Route/RouteManager")(app);

app.listen(3000, function () {
  console.log("Sunucu http://127.0.0.1:3000 adresinde çalışıyor.");
});
