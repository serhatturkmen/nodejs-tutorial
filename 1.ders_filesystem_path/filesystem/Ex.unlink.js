const fs = require('fs');

/*
unlink(filepath, function(err){});
-> Dosya silme için kullanılır. 
-> Eğer yoksa hatayı yakalar.
-> Eğer hata alırsa hata mesajı yazar.
-> Bu metod unlinkSync gibi asekron olmadığından
işlem devam ederken bir sonraki satırdaki işleme
geçer.
*/

fs.unlink('veriwritefile.txt',function(err){
    if(err) console.log(err);
    else console.log('Proccess success');
});

console.log("Tamamlandı");