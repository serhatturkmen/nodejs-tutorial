//modülümüzün yazdırma fonksiyonu
function yazdir(yazi) {
    console.log(yazi);
}

//modülün dışarıdan erişilmesini sağlıyoruz
module.exports.yazdir = yazdir;