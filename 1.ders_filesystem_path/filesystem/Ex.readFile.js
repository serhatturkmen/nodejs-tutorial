//filesystem modülünü erişilebilir kıldık
const fs = require('fs');

/*
readFile(filepath,encoding,function);
-> Bu metodun temel işlevi dosya okumadır. 
-> Bu metod readfileSync gibi asekron olmadığından
işlem devam ederken bir sonraki satırdaki işleme
geçer.
*/

// veri.txt adlı dosyanın utf8 çözücüsüyle açıp içindeki
// veriyi filecontent değişken sabitine aktarır.
const filecontent = fs.readFile('veri.txt', "utf-8" ,function(err,data) {
    //hata meydana gelirse ekrana yazdırır.
    if(err) console.log(err);
    //hata yoksa veriyi ekrana yazdırır.
    else console.log(data);
});

console.log("Tamamlandı");