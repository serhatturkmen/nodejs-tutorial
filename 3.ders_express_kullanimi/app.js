var express = require('express');
const fs = require('fs');
const path = require('path');
var app = express();

/*
---------------------------
Kurulumu için
npm install express --save
---------------------------
*/

// erişilebilir bir klasör tanımlıyoruz. 
// Bu klasör sitede kullanıcılar tarafından
// erişilebilir olacaktır.
app.use('/public', express.static(path.join(__dirname, 'public')));

// kullanıcının sayfaları açabilmesi için get ile
// url isteklerini yakalayıp cevap olarak html sayfasını
// kullanıcıya gösteriyoruz
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/document', function(req, res) {
    res.sendFile(path.join(__dirname, 'document.pdf')); 
});

// bu yapının biraz daha düzenli hali bu şekil yapılabilir.
var loginController = function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
}
app.get('/login', loginController);

app.listen(3000, function () {
    console.log('Sunucu http://127.0.0.1:3000 adresinde çalışıyor')
})