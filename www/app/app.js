(function() {
	angular
		.module('chatbox', ['ngRoute'])
		.config(routerConfig);

routerConfig.$inject = ["$routeProvider"];
////

function routerConfig($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "app/views/index.html",
			controller: "chatController",
			controllerAs: "vm"
		});
}	

})();