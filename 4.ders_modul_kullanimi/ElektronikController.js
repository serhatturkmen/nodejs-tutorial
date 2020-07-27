const path = require('path');

module.exports.elektronikcontroller = function (req, res) {
    res.sendFile(path.join(__dirname, 'electronic.html'));
}