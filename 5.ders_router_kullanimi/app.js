var express = require('express');
var path = require('path');
var elektronik = require('./view/ElektronikRoute');
const app = express();

var homeController = function(req, res){
    res.sendFile(path.join(__dirname, '/templates/index.html'));
}

/*
gelen her isteğe karşı loglama yapar.
*/
app.use(function(req, res, next){
    console.log("Gelen istek.:"+req.url);
    var datetime = new Date();
    console.log("Zamanı......:"+datetime);
    next();
});

app.get('/', homeController);

/* 
bu kısımda router (yönlendirici) a 
/elektronik yönlendirme bu kısımdan başlayacak.s
*/
app.use('/elektronik', elektronik);

app.listen(3000, function () {
    console.log('Sunucu http://127.0.0.1:3000 adresinde çalışıyor.')
});
