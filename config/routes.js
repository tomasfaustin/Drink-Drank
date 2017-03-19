var express 				= require('express'),
		router					= express.Router(),
		bodyParser			= require('body-parser'),
		// methodOverride	= require('method-override'),
		passport				= require('passport');

var {home, signup} = require('../controllers/users');


function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return;

	res.redirect('/');
}

router.route('/')
	.get(home);

router.route('/signup')
	.get(signup);

module.exports = router
