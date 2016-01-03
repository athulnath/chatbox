
var LocalStrategy = require("passport-local").Strategy,
	User = require("../models/user.model.js");


module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	}, function(email, password, done) {

		User.findOne({email: email}, function(err, user) {
			if(err) {
				return done(err);
			}

			if(!user) {
				return done(null, false, {message: "user not found"});
			}

			if(!user.checkPassword(password)) {
				return done(null, false, {message: "Invalid password"});
			}

			return done(null, user);
		});

	}));
};

