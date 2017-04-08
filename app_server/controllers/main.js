/**
 * Created by debrachong on 3/21/17.
 */
/*GET home page*/

module.exports.index = function(req, res){
    res.render('index',{title: 'Yang!March!Project!'});
};

/*
/*module.exports.shop = function(req, res){
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


module.exports.runway = function(req, res){
    res.render('runway',{title: 'Runway'});
};
module.exports.mini = function(req, res){
    res.render('mini',{title: 'Mini Edits'});
};*/