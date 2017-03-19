var express 				= require('express'),
		router					= express.Router(),
		bodyParser			= require('body-parser'),
		// methodOverride	= require('method-override'),
		passport				= require('passport');

var {home, getSignup, postSignup, getLogin, postLogin, getFacebook, getFacebookCallback} = require('../controllers/users');
var {about} = require('../controllers/staticpages')
var {index} = require('../controllers/index')

function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return;

	res.redirect('/');
}

router.route('/')
	.get(home);

router.route('/index')
	.get(index);

router.route('/about')
	.get(about);

router.route('/signup')
	.get(getSignup)
	.post(postSignup)

router.route('/login')
	.get(getLogin)
	.post(postLogin)

//route for facebook auth and login
router.route('/auth/facebook')
	.get(getFacebook)

//handle callback after auth
router.route('/auth/facebook/callback')
	.get(getFacebookCallback)

module.exports = router
