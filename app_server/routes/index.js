var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlAbout = require('../controllers/about');
/* sample 1 controllers */
var ctrlShop = require('../controllers/sample1controllers/shopCtrl');
var ctrlRunway = require('../controllers/sample1controllers/runCtrl');
var ctrlMini = require('../controllers/sample1controllers/miniCtrl');
var ctrlAccount = require('../controllers/sample1controllers/accountCtrl');
var ctrlStuffs = require('../controllers/sample1controllers/stuffCtrl');

/*GET main home page. */
router.get('/', ctrlMain.index);

/* GET sample1 landing page. */
router.get('/sample1', ctrlMain.sample1);
/* GET sample1 landing page. */
router.get('/sample2', ctrlMain.sample2);
/* GET sample1 landing page. */
router.get('/sample3', ctrlMain.sample3);

/* routes for sample 1 */
/* GET stuff page. */
router.get('/stuff/yang', ctrlStuffs.stuff);
/* GET stuff page. */
router.get('/stuff/moreyang', ctrlStuffs.stuff2);

/* GET account page. */
router.get('/account', ctrlAccount.account);
/* GET account page. */
router.get('/account/login', ctrlAccount.login);
router.post('/account/login', ctrlAccount.createlogin);
/* GET account page. */
router.get('/account/register', ctrlAccount.register);
/* GET wishlist page. */
router.get('/account/wishlist', ctrlAccount.wishlist);

/* GET shop page. */
router.get('/shop', ctrlShop.shop);
/* GET shop mom. */
router.get('/shop/mom', ctrlShop.shopMom);
/* GET shop mom alt skirt */
router.get('/shop/mom/alt', ctrlShop.shopAlt);
/* GET shop best friend */
router.get('/shop/bf', ctrlShop.shopBf);
/* GET shop you */
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
/* GET mini shoe edit page. */
router.get('/mini/shoes', ctrlMini.miniShoes);
/* GET mini jewels edit page. */
router.get('/mini/jewels', ctrlMini.miniJewels);

/* GET about page. */
router.get('/about', ctrlAbout.about);

module.exports = router;
