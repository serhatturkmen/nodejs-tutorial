const fs = require('fs');

/*
rename(eskidosyaadı, yenidosyaadı, function(err){});
-> Dosyayı yeniden adlandırma methodudur.
-> eskidosyaadı ve yenidosyaadı parametrelerini
girince valolan dosya yolunu da eklemeyi unutmayınız.
-> Bu metod renameSync gibi asekron olmadığından
işlem devam ederken bir sonraki satırdaki işleme
geçer.
*/
fs.rename("veriw.txt", "veriler.txt", function(err) {
    if(err) console.log(err);
    else console.log("Proccess Success");
});
console.log("Tamamlandı");