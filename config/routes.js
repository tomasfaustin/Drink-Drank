var express 		= require('express'),
		router			= express.Router(),
		bodyParser	= require('body-parser'),
		passport		= require('passport');

var {home, getSignup, postSignup, getLogin, postLogin, getLogout, getFacebook, getFacebookCallback} = require('../controllers/users'),
		{about, profile} = require('../controllers/staticpages'),
		{index, search, barInfo, postSearch} = require('../controllers/index'),
		{createBar, updateBar, deleteBar} = require('../controllers/bars');

function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();

	res.redirect('/');
}

router.route('/')
	.get(home);

router.route('/index')
	.get(authenticatedUser, index);

router.route('/bar')
	.post(createBar);

router.route('/bar/:id')
  .patch(updateBar)
	.delete(deleteBar);

router.route('/about')
	.get(about);

router.route('/profile')
	.get(profile)

router.route('/signup')
	.get(getSignup)
	.post(postSignup);

router.route('/login')
	.get(getLogin)
	.post(postLogin);

router.route('/logout')
	.get(getLogout);

router.route('/search')
	.get(search)
	.post(postSearch);

//route for facebook auth and login
router.route('/auth/facebook')
	.get(getFacebook);

//handle callback after auth
router.route('/auth/facebook/callback')
	.get(getFacebookCallback);

module.exports = router





// route to Bar Info
// router.route('/barInfo')
// 	.get(barInfo);
