const path = require('path');

/*
Yönlendirmeleri bu controllerdan yapılır.
*/

module.exports.index = function(req, res){
    res.sendFile(path.join(__dirname, '../templates/electronic.html'));
}

module.exports.bilgisayar = function (req, res) {
    res.sendFile(path.join(__dirname, '../templates/computer.html'));
}