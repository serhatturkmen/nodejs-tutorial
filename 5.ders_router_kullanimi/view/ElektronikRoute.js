const express = require('express');
const router = express.Router();
var elektronik = require('../controller/ElektronikController');
/*
Bu modülde yönlendirme yapıp router nesnesi
export edildi. Yani app.js dosyasından erişilebilir
kılındı.
*/

/*
elektronik urlinden gelen her isteğe karşı loglama yapar.
*
router.use(function(req, res, next){
    console.log("Gelen istek.:/elektronik"+req.url);
    var datetime = new Date();
    console.log("Zamanı......:"+datetime);
    next();
});

*/

router.get('/', elektronik.index);
router.get('/bilgisayar', elektronik.bilgisayar);

module.exports = router;