const http = require('http');

var server =http.createServer(function(req, res){
    // writeHead(statuscode, content-type belirleme)
    // text/plain veya text/html seçilebilir.
    // html taglarını kullanabilmemiz için content-type
    // kısmına text/html eklemeliyiz.
    res.writeHead('200', {'content-type': 'text/html'});
    res.write('<h1>Hello</h1>');
    res.end();
});
server.listen(3000, function(){
    console.log('Sunucu http://127.0.0.1:3000/ portunda dinleniyor...');
});
