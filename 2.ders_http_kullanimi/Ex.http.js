const http = require('http');

/*
http modülü
------------------------
Kurulumu için
npm install http --save
------------------------
-> web sunucusunu çalıştırmak
-> gelen istek(request) ve cevap(response)
kısımlarını yakalayıp tarayıcıda bir web
sitesinin yapabileceği işlemleri yapabilmek
için oluşturduğumuz bir web sunucusudur.
->sunucu oluşturma
http.createServer(function(req, res){}).listen(3000, function(){
    console.log('Sunucu http://127.0.0.1:3000/ portunda dinleniyor...');
});
şeklinde oluşturulur. İsterseniz bir değişkene atarak 
ta yapılabilir.
var server = http.createServer(function(req, res){res.end();});
server.listen(3000, function(){
    console.log('Sunucu http://127.0.0.1:3000/ portunda dinleniyor...');
});
-> listen metodunda callback fonksiyonu zorunlu değil
listen(3000); şeklinde de yazılabilir. Buradaki amaç çalıştığına dair
bilgi vermek.
*/

var server =http.createServer(function(req, res){
    res.write('Hello');
    res.end();
});
server.listen(3000, function(){
    console.log('Sunucu http://127.0.0.1:3000/ portunda dinleniyor...');
});
