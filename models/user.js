var mongoose = require('mongoose'),
		bcrypt	 = require('bcrypt-nodejs'),
		Bar 		 = require('./bar');

var userSchema = mongoose.Schema({
	local : {
		name		 : String,
		email    : String,
		password : String
	},
	facebook : {
		id       : String,
		token    : String,
		email    : String,
		name     : String
	},
	bars       : [Bar.schema]
});

// adds passport encryption
userSchema.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', userSchema)

module.exports = User;
