(function(){
	
var config = {
	chatserver: 'http://192.168.0.10:8080'
};


	angular
		.module('chatbox')
		.constant('config', config);
})();