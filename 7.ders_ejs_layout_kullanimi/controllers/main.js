module.exports.index = function(req, res){
    res.render('index');
}

module.exports.parametre = function(req, res){
    var kisi = ['Test', 'Mehmet', 'Veli'];
    res.render('parametreli',  {kisi: kisi, mesaj: 'Şablon kullanımı öğreniyorum.' });
}
