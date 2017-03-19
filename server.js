var express 			= require('express'),
		app						= express(),
		mongoose 			= require('mongoose'),
		passport			= require('passport'),
		flash					= require('connect-flash'),
		path					= require('path'),
		morgan  			= require('morgan'),
		cookieParser	= require('cookie-parser'),
		bodyParser  	= require('body-parser'),
		session		  	= require('express-session');

mongoose.connect('mongodb://localhost/test-db-p3');

app.use(morgan('dev'));
app.use(cookieParser);
app.use(bodyParser);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

require('./config/passport')(passport);

app.use(function (req, res, next) {
	global.user = req.user;
	next();
});



var routes = require('./config/routes');
app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('connected on port', port);
})