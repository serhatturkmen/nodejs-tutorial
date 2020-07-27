//modülümüzü bir değişken içine attık böylece bu değişkende
//modülümüzün izin verilen fonksiyonlarına erişebileceğiz.
const yazdirMetod = require('./module');

var metin = "Merhaba Dünya";

//modülümüzün yazdır fonksiyonuna erişip kullanımını sağladık.
yazdirMetod.yazdir(metin);

/*
Bu örnekte modül nasıl tanımlanır ve modulun fonksiyonunun dışarıdan
erişilmesine nasıl isin verilir onu öğrendik.
*/