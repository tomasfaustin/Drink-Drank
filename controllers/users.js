var passport = require('passport');

//GET /signup
function getSignup(req, res) {
	res.render('signup.ejs', { message: req.flash('signupMessage') });
}

function postSignup(req, res) {
	console.log(req.params)

	var signUpStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signUpStrategy(req, res)
}

function getLogin(req, res) {
	res.render('login.ejs', { message: req.flash('loginMessage') });
}

function postLogin(req, res) {
	var loginProperty = passport.authenticate('local-logn', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	});

	return loginProperty(req, res);
}







function home(req, res) {
	res.render('home.ejs');
}

module.exports = {
	home : home,
	getSignup: getSignup,
	postSignup: postSignup
}
