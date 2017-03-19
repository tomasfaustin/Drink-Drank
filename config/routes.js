var express 				= require('express'),
		router					= express.Router(),
		bodyParser			= require('body-parser'),
		// methodOverride	= require('method-override'),
		passport				= require('passport');

var {home, getSignup, postSignup} = require('../controllers/users');


function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return;

	res.redirect('/');
}

router.route('/')
	.get(home);

router.route('/signup')
	.get(getSignup)
	.post(postSignup)

module.exports = router
