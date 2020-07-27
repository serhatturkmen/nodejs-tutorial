var express = require('express');
var path = require('path');
var elektronikcntrl = require('./ElektronikController');
const app = express();

var homeController = function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
}

app.get('/', homeController);
app.get('/elektronik', elektronikcntrl.elektronikcontroller);

app.listen(3000);
