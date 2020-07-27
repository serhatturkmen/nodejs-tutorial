//filesystem modülünü erişilebilir kıldık
const fs = require('fs');

/*
readFile(filepath,encoding,function);
-> Bu metodun temel işlevi dosya okumadır. 
-> Bu metod asekron olduğundan işlem devam 
ederken bir sonraki satırdaki işleme geçmesini
engeller. Yani işlem bitene kadar kendinden
sonraki işlemleri duraklatır.
*/


try {
    // veri.txt adlı dosyanın utf8 çözücüsüyle açıp içindeki
    // veriyi filecontent değişken sabitine aktarır.
    const filecontent = fs.readFileSync('veriw.txt', "utf-8");
    //hata yoksa veriyi ekrana yazdırır.
    console.log(filecontent);
} catch (error) {
    console.log(error);
}

console.log("Tamamlandı");