const fs = require('fs');

/*
appendfileSync(filepath, content);
->File path klasöründe belirtilen dosya var ise 
dosyaya content değişken içeriğini ekler. Eğer 
yoksa ise dosyayı oluşturup dosya içeriğine 
content değişkeninin içeriğini ekler ve kaydeder.
-> Bu metod asekron olduğundan işlem devam ederken 
bir sonraki satıra geçmez.
::::::::::Bir dipnot::::::::::
-> Eğer dosya var ise içerik korunur. 
Ve content dosya içeriğine eklenir.
*/

try {
    fs.appendFileSync('veri.txt', "\nİyiyim seni sormalı?");
    console.log("Proccess Success");
} catch (error) {
    console.log(error);
}

console.log("Tamamlandı");