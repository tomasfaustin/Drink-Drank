var mongoose = require('mongoose'),
		bcrypt	 = require('bcrypt-nodejs'),
		Bar 		 = require('./bar');

var userSchema = mongoose.Schema({
	local : {
		email    : String,
		password : String
	},
		bars: [Bar.schema]
});

// adds passport encryption
userSchema.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcyrpt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', userSchema)

module.exports = User;
