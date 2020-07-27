//filesystem modülünü erişilebilir kıldık
const fs = require('fs');

/*
readdirSync(path); metodu
-> Metodun temel işlevi path(dosya yolu) içerisindeki 
dosya isimlerini bir listeye aktarıp o listeyi 
return(geriye döndürme) etmektir.
-> Bu metod asekron olup işlem bitene kadar bir
sonraki satıra gitmenizi engeller. Ancak işlem 
bitince bir sonraki satırın işlemini yapar
*/

// ./ yolundaki dosyaların adını liste olarak file
// sabit değişkenine aktarır.
const files = fs.readdirSync('./');

//dosya isimlerinin bulunduğu listeyi yani file değişkenini
// ekrana yazdırır.
console.log(files);

console.log('completed');