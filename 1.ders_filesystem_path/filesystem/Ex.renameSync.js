const fs = require('fs');

/*
renameSync(eskidosyaadı, yenidosyaadı);
-> Dosyayı yeniden adlandırma methodudur.
-> eskidosyaadı ve yenidosyaadı parametrelerini
girince valolan dosya yolunu da eklemeyi unutmayınız.
-> Bu metod asekron olduğundan işlem devam 
ederken bir sonraki satırdaki işlemi durdurur
ve işlem bitene kadar yeni işleme geçmez.
*/
try {
    fs.renameSync("veriw.txt", "veriler.txt");;
    console.log("Proccess Success");
} catch (error) {
    console.log(error);
}

console.log("Tamamlandı");