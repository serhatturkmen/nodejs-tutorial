module.exports.index = function(req, res){
    res.render('index');
}

module.exports.parametre = function(req, res){
    var kisi = ['Ahmet', 'Mehmet', 'Veli'];
    res.render('parametreli',  {kisi: kisi, mesaj: 'Merhaba ben renderdan gönderildim.' });
}
