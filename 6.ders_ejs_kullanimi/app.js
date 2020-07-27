var express = require('express');
var path = require('path');
var app = express();
var controllermain = require('./controllers/main');
/*
-----------------------
Kurulumu
npm install ejs --save
-----------------------
ejs
Şablon ve html render için kullanılan
görüntüleme kütüphanesidir.
Html ile nodejs arasındaki veri
arayüzünü sağlıyor.

ekrana yazı yazmak için 
<%= metin %>

for veya farklı işlemler için
<% for(int i=0; i< kisiler.lenth(); i++){ %>
    <%= kisiler[i] %>
<% } %>
*/

// görüntüleme motoronu belirtilmesi
app.set('view engine', 'ejs');

// ejs dosyalarının bulunduğu konum
app.set('views', path.join(__dirname, './views'));

/*
gelen her isteğe karşı loglama yapar.
*/
app.use(function(req, res, next){
    console.log("Gelen istek.:"+req.url);
    var datetime = new Date();
    console.log("Zamanı......:"+datetime);
    next();
});

app.get('/', controllermain.index);
app.get('/parametreli', controllermain.parametre);


app.listen(3000, function () {
    console.log('Sunucu http://127.0.0.1:3000 adresinde çalışıyor.')
});

