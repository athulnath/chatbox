(function() {
	angular
		.module('chatbox')
		.controller('SignupController', SignupController);

	SignupController.$inject = ["SignupAPI", "$state"];

	/////
	function SignupController(SignupAPI, $state) {

		var vm = this;

		vm.form = {};

		//public functions
		vm.submit = submit;

		/////
		function submit() {
			var signupObj = new SignupAPI(vm.form);
			signupObj.$save(_onSignupSuccess, _onSignupFailure);
		}

		function _onSignupSuccess(user) {
			$state.go('login');
		}

		function _onSignupFailure() {
			console.log("login failed");
		}
	
	}

})();