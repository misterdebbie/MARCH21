var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlAbout = require('../controllers/about');
var ctrlShop = require('../controllers/shopCtrl');
var ctrlRunway = require('../controllers/runCtrl');
var ctrlMini = require('../controllers/miniCtrl');
var ctrlAccount = require('../controllers/accountCtrl');



/* GET home page. */
router.get('/', ctrlMain.index);

/* GET account page. */
router.get('/account', ctrlAccount.account);


/* GET shop page. */
router.get('/shop', ctrlShop.shop);

/* GET shop mom. */
router.get('/shop/mom', ctrlShop.shopMom);

/* GET shop mom. */
router.get('/shop/bf', ctrlShop.shopBf);

/* GET shop mom. */
router.get('/shop/you', ctrlShop.shopYou);


/* GET runway page. */
router.get('/runway', ctrlRunway.runway);

/* GET mini edit page. */
router.get('/mini', ctrlMini.mini);

/* GET about page. */
router.get('/about', ctrlAbout.about);

module.exports = router;
