(function() {
	angular
		.module('chatbox')
		.factory('LoginAPI', LoginAPI);

	LoginAPI.$inject = ['$resource'];

	////
	function LoginAPI($resource) {
		return $resource("http://192.168.0.10:8080/user/login/");
	}

})();