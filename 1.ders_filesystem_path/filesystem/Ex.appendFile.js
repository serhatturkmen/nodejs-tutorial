const fs = require('fs');

/*
appendfile(filepath, content, function(err){});
->File path klasöründe belirtilen dosya var ise 
dosyaya content değişken içeriğini ekler. Eğer 
yoksa ise dosyayı oluşturup dosya içeriğine 
content değişkeninin içeriğini ekler ve kaydeder.
-> Bu metod readfileSync gibi asekron olmadığından
işlem devam ederken bir sonraki satırdaki işleme
geçer.
::::::::::Bir dipnot::::::::::
-> Eğer dosya var ise içerik korunur. 
Ve content dosya içeriğine eklenir.
*/

const file = fs.appendFile('veri.txt', "\nMerhaba Nasılsın?", function(err) {
    if(err) console.log(err);
    else console.log('Proccess is success');
});

console.log("Tamamlandı");