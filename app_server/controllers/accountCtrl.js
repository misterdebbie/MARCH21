module.exports.account = function(req, res){
    res.render('account',{title: 'Accounts'});
};
module.exports.login = function(req, res){
    res.render('login',{title: 'login'});
};
module.exports.register = function(req, res){
    res.render('register',{title: 'register'});
};