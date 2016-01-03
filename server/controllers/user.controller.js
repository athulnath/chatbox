var express = require("express"),
	router = express.Router(),
	User = require("../models/user.model.js"),
	passport = require("passport"),
	auth = require("../middlewares/authorization.js");


router.post('/signup', function(req, res) {
	var userDoc = new User(req.body);
	userDoc.save(function(err, data) {
		if(err) {
			return res.status(500).json(err);
		}
		res.json({status: "OK"});
	});
});


router.post('/login', passport.authenticate("local-login"), function(req, res) {
	console.log('call recived');
	res.json(req.user.toObject());
});

router.get('/logout', auth.requiresLogin, function(req, res) {
	req.logout();
	res.json({status: "OK"});
});

router.get('/me', auth.requiresLogin, function(req, res) {
	res.json(req.user.toObject());
});


module.exports = router;
