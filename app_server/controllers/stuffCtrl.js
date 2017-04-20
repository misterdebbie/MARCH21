var request = require ('request');

module.exports.stuff = function(req, res){
    res.render('stuff',{title: 'yang stuffs'});
};
module.exports.stuff2 = function(req, res){
    res.render('stuff2',{title: 'more yang stuffs'});
};