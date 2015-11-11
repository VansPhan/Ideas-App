angular.module('ideas')
.controller('LoginController', function($http) {
	var controller = this;
	$http({ method: 'GET', url: '' }).success(function(data) {
		console.log(data);
		console.log(controller);
		controller = data;
	});
});
