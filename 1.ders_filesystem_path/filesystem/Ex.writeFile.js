const fs = require('fs');

/*
writeFile(filepath, data, function(err){});
-> Dosya yazma işlemi yapar. Dosya yok ise 
oluşturup içine yazar. Var ise eski dosya 
içeriğini silip istenilen veri eklenir.
-> Bu metod readfileSync gibi asekron olmadığından
işlem devam ederken bir sonraki satırdaki işleme
geçer.
::::::::::DİPNOT::::::::::
-> Eğer dosya var ise dosyanın eski içeriği silinir
ve istenilen değer dosyaya yazılır.
*/

const file = fs.writeFile('veriwritefile.txt', 'Nodejs öğreniyorum', function(err){
    if(err) console.log(err);
    else console.log("Proccess success");
});

console.log("Tamamlandı");