(function() {
	angular
		.module('chatbox')
		.controller('DashboardController', DashboardController);

	DashboardController.$inject = ["$rootScope"];

	/////
	function DashboardController($rootScope) {

		var vm = this;

		vm.user = $rootScope.user;
	
	}

})();