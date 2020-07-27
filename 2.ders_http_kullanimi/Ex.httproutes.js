const http = require('http');

/*
basit bir yönlendirme yapıldı.
yonlendiren sayfaya sadece text gönderiliyor.
*/

var server =http.createServer(function(req, res){
    var requesturl = req.url;
    switch (requesturl) {
        case '/':
            res.writeHead('200', {'content-type': 'text/plain'});
            res.write('Anasayfa');
            res.end();
            break;
    
        case '/about':
            res.writeHead('200', {'content-type': 'text/plain'});
            res.write('about');
            res.end();
            break;
    
        case '/contact':
            res.writeHead('200', {'content-type': 'text/plain'});
            res.write('contact');
            res.end();
            break;
                
        default:
            res.writeHead('404', {'content-type': 'text/plain'});
            res.write('Sayfa Bulunamadi');
            res.end();
            break;
    }
});
server.listen(3000, function(){
    console.log('Sunucu http://127.0.0.1:3000/ portunda dinleniyor...');
});
