var express 				= require('express'),
		router					= express.Router(),
		bodyParser			= require('body-parser'),
		// methodOverride	= require('method-override'),
		passport				= require('passport');

var {home, getSignup, postSignup, getLogin, postLogin} = require('../controllers/users');
var {about} = require('../controllers/static')

function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return;

	res.redirect('/');
}

router.route('/')
	.get(home);

router.route('/about')
	.get(about);

router.route('/signup')
	.get(getSignup)
	.post(postSignup)

router.route('/login')
	.get(getLogin)
	.post(postLogin)

module.exports = router
