const http = require('http');
const fs = require('fs');

/*
Bu örnekte html dosyasının içeriğini readFile fonksiyonu
ile alındı ve bunu yaparken de bir fonksiyonda web sunucusunda
cevap olarak gönderildi. Basit bir routing(yönlendirme) örneği
yapıldı.
switch case yapısı ile gelen isteğe uygun cevap verildi.
*/

function serveFile(response, path, responseCode){
    if(!responseCode) responseCode=200;
    fs.readFile(__dirname+path, function(err, data){
        if(err){
            response.writeHead(500, {'content-type':'text/plain'});
            response.end('500 - interval error');
        }else{
            response.writeHead(responseCode, {'content-type':'text/html'});
            response.end(data);
        }
    })
}

var server =http.createServer(function(req, res){
    var requesturl = req.url;
    switch (requesturl) {
        case '/':
            serveFile(res, '/templates/index.html');
            break;
        case '/about':
            serveFile(res, '/templates/about.html');
            break;
        case '/contact':
            serveFile(res, '/templates/contact.html');
            break;
        default:
            serveFile(res, '/templates/404.html', 404);
            break;
    }
});
server.listen(3000, function(){
    console.log('Sunucu http://127.0.0.1:3000/ portunda dinleniyor...');
});
