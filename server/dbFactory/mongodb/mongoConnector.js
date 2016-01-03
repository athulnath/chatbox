var mongoose = require("mongoose"),
	util = require("util"),
	config = require("../../config/config.js");


function MongoConnector() {

}

MongoConnector.initDb = function() {
	var url = util.format("mongodb://%s:%d/%s", config.mongodb.host, config.mongodb.port, config.mongodb.db);
	mongoose.connect(url);
};


module.exports = MongoConnector;