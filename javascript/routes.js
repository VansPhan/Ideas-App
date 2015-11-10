angular.module('ideasApp')
.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '/templates/pages/login/index.html'
	})
});