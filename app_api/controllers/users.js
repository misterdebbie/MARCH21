var mongoose = require('mongoose');
var Profile = mongoose.model('Profile');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET list of users */
module.exports.displayUsers = function(req, res) {
    Profile
        .find()
        .exec(
            function(err, results) {
                if (err) {
                    console.log('results error:', err);
                    sendJSONresponse(res, 404, err);
                } else {
                    sendJSONresponse(res, 200, results);
                }
            });
};
/* GET a profile by the id */
module.exports.userReadOne = function(req, res) {
    console.log('Finding profile details', req.params);
    if (req.params && req.params.userid) {
        Profile
            .findById(req.params.userid)
            .exec(function(err, profile) {
                if (!profile) {
                    sendJSONresponse(res, 404, {
                        "message": "userid not found"
                    });
                    return;
                } else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(profile);
                sendJSONresponse(res, 200, profile);
            });
    } else {
        console.log('No userid specified');
        sendJSONresponse(res, 404, {
            "message": "No userid in request"
        });
    }
};
/*module.exports.displayUsers = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};*/

module.exports.createUser = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
/*module.exports.userReadOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};*/
module.exports.userUpdateOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
module.exports.userDeleteOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};
