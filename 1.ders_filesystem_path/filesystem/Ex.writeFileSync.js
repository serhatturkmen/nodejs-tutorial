const fs = require('fs');

/*
writeFileSync(filepath, data);
-> Dosya yazma işlemi yapar. Dosya yok ise 
oluşturup içine yazar. Var ise eski dosya 
içeriğini silip istenilen veri eklenir.
-> Bu metod asekron olduğundan işlem devam 
ederken bir sonraki satırdaki işlemi durdurur
ve işlem bitene kadar yeni işleme geçmez.
::::::::::DİPNOT::::::::::
-> Eğer dosya var ise dosyanın eski içeriği 
silinir ve istenilen değer dosyaya yazılır.
*/

try {
    fs.writeFileSync('veriwritefile.txt', 'Nodejs öğreniyorum.');
    console.log("Proccess success");
} catch (error) {
    console.log(err);
}

console.log("Tamamlandı");