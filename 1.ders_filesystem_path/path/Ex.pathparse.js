const path = require('path');

/*
path modülünde 
root : sistem root klasörü
dir : sistemin çalıştırıldığı konum
base : sistemin çalışma dosyası adı ve uzantısı
ext : sistemin çalışma dosyasının uzantısı
name : sistemin çalışma dosyasının adı
*/
console.log(path.parse(__filename));

//sistemin çalıştırıldığı konum
console.log(path.dirname(__filename));

//sistemin çalışma dosyası adı ve uzantısı
console.log(path.basename(__filename));

//sistemin çalışma dosyasının uzantısı
console.log(path.extname(__filename));

//sistemin çalıştırıldığı konumun dizini
console.log(path.parse(__dirname));

console.log("Tamamlandı");