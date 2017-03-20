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
	var loginProperty = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	});

	return loginProperty(req, res);
}

function getLogout(req, res) {
	req.logout();
	res.redirect('/about');
	console.log('logged out')
}


 // =====================================
 // FACEBOOK ACTIONS=====================
 // =====================================
 // route for facebook authentication and login
 function getFacebook(request, response) {
   var signupStrategy = passport.authenticate('facebook', {
     scope : 'email'
   });

   return signupStrategy(request, response);
 }

 // handle the callback after facebook has authenticated the user
 function getFacebookCallback(request, response) {
   var loginProperty = passport.authenticate('facebook', {
     successRedirect : '/',
     failureRedirect : '/login'
   });

   return loginProperty(request, response);
 }

//=================FACEBOOK==========================

function home(req, res) {
	res.render('home.ejs');
}

module.exports = {
	home : home,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogin: getLogin,
	postLogin: postLogin,
	getLogout: getLogout,
	getFacebook: getFacebook,
	getFacebookCallback: getFacebookCallback
}
