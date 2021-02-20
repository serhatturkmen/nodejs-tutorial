var express = require('express');
var path = require('path');
var app = express();
var controllermain = require('./controllers/main');
/*
-----------------------
Kurulumu
npm install express-ejs-layouts --save
-----------------------
ejs şablon kullanımı
-> Sitelerde navbar(menüler) ve footer(alt menü) her
sayfada aynı içerik olduğundan dolayı bu kısımların
tekrarını engellemek ve sistemi daha rahat yazabilmek
adına kullanılır. 
--->Örneğin kişi iletişim veya hakkımızda sayfasına 
giriş yapacağı zaman üst kısım ve alt kısım aynı kalır
bu durumda şablon kullanılmazsa sayfada veri tekrarı 
meydana gelir. Bu sayfayı hazırlayan kişi için çok 
uğraştırıcı olur bunun önüne geçmek için şablon
kullanımı son derece önemlidir.

layout.ejs sayfasında
sayfanın orta kısmında
<%- body %>
bu kısmı yazmamız yeterli
*/

//şablon kullanılması için kütüphaneyi değişkene aktarma
var ejsLayout = require('express-ejs-layouts');

//şablon kullanılacağının belirtilmesi
app.use(ejsLayout);

// görüntüleme motoronu belirtilmesi
app.set('view engine', 'ejs');

// ejs dosyalarının bulunduğu konum
app.set('views', path.join(__dirname, './views'));

/*
gelen her isteğe karşı loglama yapar.
*/
app.use(function(req, res, next){
    console.log("-------------");
    console.log("Gelen istek.:"+req.url);
    var datetime = new Date();
    console.log("Zamanı......:"+datetime);
    console.log("-------------");
    next();
});

app.get('/', controllermain.index);
app.get('/parametreli', controllermain.parametre);


app.listen(3000, function () {
    console.log('Sunucu http://127.0.0.1:3000 adresinde çalışıyor.')
});

