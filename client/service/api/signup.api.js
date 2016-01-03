(function() {
	angular
		.module('chatbox')
		.factory('SignupAPI', SignupAPI);

	SignupAPI.$inject = ['$resource'];

	////
	function SignupAPI($resource) {
		return $resource("http://192.168.0.10:8080/user/signup/");
	}

})();