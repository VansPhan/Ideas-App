angular.module('ideas')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/templates/pages/login/index.html',
		controller: 'LoginController',
		controllerAs: 'loginCtrl'
	})
	.when('/fail-login', {
		templateUrl: '/templates/pages/login/fail-login.html'
	})
	.when('/inactive-user', {
		templateUrl: '/templates/pages/user/inactive-user.html'
	})
	.when('/login', {
		redirectTo: '/'
	})
	.when('/home', {
		templateUrl: '/templates/pages/home/index.html',
		controller: 'HomeController',
		controllerAs: 'homeCtrl'
	})
	.otherwise( {redirectTo: '/' });
});