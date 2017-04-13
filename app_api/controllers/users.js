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
                        "message": "user id not found"
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
        console.log('No user id specified');
        sendJSONresponse(res, 404, {
            "message": "No user id in request"
        });
    }
};
/*module.exports.displayUsers = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};*/
/* POST a new profile */
/* /api/profiles */
module.exports.createUser = function(req, res) {
    console.log(req.body);
    Profile.create({
        name: req.body.name,
        password: req.body.password
    }, function(err, profile) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(profile);
            sendJSONresponse(res, 201, profile);
        }
    });
};

/*module.exports.createUser = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};*/
/*module.exports.userReadOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};*/
/* PUT /api/profiles/:profileid */

module.exports.userUpdateOne = function(req, res) {
    if (!req.params.userid) {
        sendJSONresponse(res, 404, {
            "message": "Not found, user id is required"
        });
        return;
    }
    Profile
        .findById(req.params.userid)
        .select('name password')
        .exec(
            function(err, profile) {
                if (!profile) {
                    sendJSONresponse(res, 404, {
                        "message": "user id not found"
                    });
                    return;
                } else if (err) {
                    sendJSONresponse(res, 400, err);
                    return;
                }
                profile.name = req.body.name;
                profile.password = req.body.password;
                profile.save(function(err, profile) {
                    if (err) {
                        sendJSONresponse(res, 404, err);
                    } else {
                        sendJSONresponse(res, 200, profile);
                    }
                });
            }
        );
};
/*module.exports.userUpdateOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};*/

/* DELETE /api/profiles/:profileid */
module.exports.userDeleteOne = function(req, res) {
    var userid = req.params.userid;
    if (userid) {
        Profile
            .findByIdAndRemove(userid)
            .exec(
                function(err, profile) {
                    if (err) {
                        console.log(err);
                        sendJSONresponse(res, 404, err);
                        return;
                    }
                    console.log("profile id " + userid + " deleted");
                    sendJSONresponse(res, 204, null);
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "No  user id"
        });
    }
};
/*module.exports.userDeleteOne = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};*/
