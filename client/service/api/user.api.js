(function() {
	angular
		.module('chatbox')
		.factory('User', User);

	User.$inject = ['$resource'];

	////
	function User($resource) {
		return $resource("http://192.168.0.10:8080/user/me");
	}

})();