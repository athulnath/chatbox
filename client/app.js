(function() {
	angular
		.module('chatbox', ['ui.router', 'ngResource'])
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
			controller: "LoginController as login",
			templateUrl: "views/login/login.html"
		})
		.state("signup", {
			url: "/signup",
			controller: "SignupController as signup",
			templateUrl: "views/login/signup.html"
		})
		.state("app", {
			url: "/app",
			abstract: true,
			template: "<ui-view></ui-view>",
			resolve: {
                    "UserResolve": UserResolutionService
            }
		})
		.state("app.secured", {
			url: "/secured",
			controller: "DashboardController",
			templateUrl: "views/test.html"
		});


	UserResolutionService.$inject = ['$q', '$state', 'User', '$rootScope'];
    function UserResolutionService($q, $state, User, $rootScope) {

        var deferred = $q.defer();

        var user = new User();
        user.$get(function(resp) {
            deferred.resolve(resp);
            $rootScope.user = user;
        }, function() {
            deferred.reject("You are not logged in");
            $state.go('login');
        });

        return deferred.promise;
    }

}
})();