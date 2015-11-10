angular.module('ideasApp')
.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: '/templates/pages/login/index.html'
	})
});