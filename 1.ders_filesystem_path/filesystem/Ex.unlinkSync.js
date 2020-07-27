const fs = require('fs');

/*
unlinkSync(filepath);
-> Dosya silme için kullanılır.
-> Eğer hata alırsa hata mesajı yazar.
-> Bu metod asekron olduğundan işlem 
devam ederken bir sonraki satırdaki
işleme geçmesini engeller. Ancak işlem 
bitince bir sonraki satıra geçer.
-> Hata yakalama kullandık çünkü eğer
kullanmasaydık dosya olmadığı zaman
hata verip programdan çıkacaktı.
*/
try {
    fs.unlinkSync('veriwritefile.txt');
    console.log('Proccess success');
} catch (error) {
    console.log(error);
}
console.log("Tamamlandı");