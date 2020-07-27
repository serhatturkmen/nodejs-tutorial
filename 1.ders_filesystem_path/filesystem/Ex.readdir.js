//filesystem modülünü erişilebilir kıldık
const fs = require('fs');

/*
readdir(path); metodu
-> Metodun temel işlevi path(dosya yolu) içerisindeki 
dosya isimlerini bir listeye aktarıp o listeyi 
return(geriye döndürme) etmektir.
-> Bu metod readdirSync gibi asekron olmadığından
işlem devam ederken bir sonraki satırdaki işleme
geçer.
*/

// ./ yolundaki dosyaların adını liste olarak file
// sabit değişkenine aktarır.
const files = fs.readdir('./', function(err, files) {
    // eğer hata meydana gelirse ekrana yazdırır.
    if(err) console.log(err);
    //dosya isimlerinin bulunduğu listeyi yani file değişkenini
    // ekrana yazdırır.
    else console.log(files);
});

console.log('Completed');