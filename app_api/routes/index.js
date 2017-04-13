var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

//users
router.get('/users', ctrlUsers.displayUsers);
router.post('/users', ctrlUsers.createUser);
router.get('/users/:userid', ctrlUsers.userReadOne);
router.put('/users/:userid', ctrlUsers.userUpdateOne);
router.delete('/users/:userid', ctrlUsers.userDeleteOne);

module.exports = router;