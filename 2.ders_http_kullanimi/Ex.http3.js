const http = require('http');
const fs = require('fs');
/*
url'e html sayfası gönderme
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
    serveFile(res, '/index.html');
});
server.listen(3000, function(){
    console.log('Sunucu http://127.0.0.1:3000/ portunda dinleniyor...');
});
