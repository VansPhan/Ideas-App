angular.module('ideas')
.controller('LoginController', function($http) {
	var controller = this;
	$http({ method: 'GET', url: 'https://win-ek4s8mcicdb:8443/!/#WWTIdeas/ideas-webservices/api/users/users' }).success(function(data) {
		console.log(data);
		console.log(controller);
		controller = data;
	});
});
