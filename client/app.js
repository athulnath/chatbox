(function() {
	angular
		.module('chatbox', ['ui.router'])
		.config(Config);

Config.$inject = ["$stateProvider", "$urlRouterProvider"];
////

function Config($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/login");

	$stateProvider
		.state("chat", {
			url: "/",
			templateUrl: "views/index.html",
			controller: "chatController",
			controllerAs: "vm"
		})
		.state("login", {
			url: "/login",
			templateUrl: "views/login/login.html"
		})
		.state("signup", {
			url: "/signup",
			templateUrl: "views/login/signup.html"
		})
		.state("app", {
			url: "/app",
			abstract: true,
			template: "<ui-view></ui-view>",
			data: {
				requiredLogin: true
			}
		})
		.state("app.secured", {
			url: "/secured",
			templateUrl: "views/test.html"
		});

}
})();