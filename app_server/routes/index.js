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
/* GET account page. */
router.get('/account/login', ctrlAccount.login);
/* GET account page. */
router.get('/account/register', ctrlAccount.register);


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
/* GET spring runway page. */
router.get('/runway/spring', ctrlRunway.runwaySpring);
/* GET runway/fall page. */
router.get('/runway/fall', ctrlRunway.runwayFall);
/* GET runway/trend page. */
router.get('/runway/trend', ctrlRunway.runwayTrend);

/* GET mini edit page. */
router.get('/mini', ctrlMini.mini);
/* GET mini bag edit page. */
router.get('/mini/bags', ctrlMini.miniBags);
/* GET mini edit page. */
router.get('/mini/shoes', ctrlMini.miniShoes);
/* GET mini edit page. */
router.get('/mini/jewels', ctrlMini.miniJewels);

/* GET about page. */
router.get('/about', ctrlAbout.about);

module.exports = router;
