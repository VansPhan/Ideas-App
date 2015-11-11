angular.module('ideas')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/login', {
		templateUrl: '/templates/pages/login/index.html'
	})
	.when('/fail-login', {
		templateUrl: '/templates/pages/login/fail-login.html'
	})
	.when('/inactive-user', {
		templateUrl: '/templates/pages/user/inactive-user.html'
	})
	.when('/', {
		templateUrl: '/templates/pages/login/index.html'
	})
	.otherwise( {redirectTo: '/' });
});