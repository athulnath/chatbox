(function() {
	angular
		.module('chatbox')
		.controller('LoginController', LoginController);

	LoginController.$inject = ["LoginAPI", "$state"];

	/////
	function LoginController(LoginAPI, $state) {

		var vm = this;

		vm.form = {};
		vm.message = "";

		//public functions
		vm.submit = submit;

		/////
		function submit() {
			var loginObj = new LoginAPI(vm.form);
			loginObj.$save(_onLoginSuccess, _onLoginFailure);
		}

		function _onLoginSuccess(user) {
			$state.go('app.secured');
		}

		function _onLoginFailure(data) {
			vm.message = "login failed";
		}
	
	}

})();