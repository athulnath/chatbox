var mongoose = require("mongoose"),
	md5 = require("../utils/md5.js");


var UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true},
	firstname: { type: String, required: true },
	lastname: { type: String, requied: true },
	hashedPassword: { type: String, required: true}
});

UserSchema.virtual("id")
	.get(function() {
		return this.email;
	});

/// password hashing
UserSchema.virtual("password")
	.set(function(password) {
		this._plainPassword = password;
		this.hashedPassword =  md5(password);
	})
	.get(function() {
		return this._plainPassword;
	});

UserSchema.methods.checkPassword = function(password) {
	return md5(password) === this.hashedPassword;
};

module.exports = mongoose.model("User", UserSchema);


