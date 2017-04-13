var mongoose = require('mongoose');
var Loc = mongoose.model('Profile');


module.exports.displayUsers = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
module.exports.createUser = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
module.exports.userReadOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
module.exports.userUpdateOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
module.exports.userDeleteOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
