angular.module('ideas')
.controller('LoginController', function($http) {
	var controller = this;
	//TODO: Create method for when login button is clicked
	//TODO: Create method for when user registers
	$http({ method: 'GET', url: 'http://52.25.89.80/ideas-webservices/api/users' }).success(function(data) {
		console.log(data);
		console.log(controller);
		controller.users = data;
	});
});
