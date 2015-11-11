angular.module('ideas')
.controller('LoginController', function($http) {
	var controller = this;
	$http({ method: 'GET', url: 'http://52.25.89.80/ideas-webservices/api/users' }).success(function(data) {
		console.log(data);
		console.log(controller);
		controller.users = data;
	});
});
