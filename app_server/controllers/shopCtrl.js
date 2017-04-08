module.exports.shop = function(req, res){
    res.render('shop',{title: 'Shop'});
};
module.exports.shopMom = function(req, res){
    res.render('shopMom',{title: 'Shop MOM!!!!'});
};
module.exports.shopBf = function(req, res){
    res.render('shopBf',{title: 'Shop Best Friend!!!!'});
};
module.exports.shopYou = function(req, res){
    res.render('shopYou',{title: 'Shop YOU!!!'});
};