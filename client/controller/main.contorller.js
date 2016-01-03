(function() {
	angular
		.module('chatbox')
		.controller('MainController', MainController);

	MainController.$inject = ["$rootScope", "$state", "$http"];

	/////
	function MainController($rootScope, $state, $http) {

		var vm = this;

		vm.logout = logout;

		function logout() {
			$http.get("http://192.168.0.10:8080/user/logout")
				.then(function() {
					delete $rootScope.user;
					$state.go("login");
				});
		}
	}

})();