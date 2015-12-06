angular.module('ideas')
.controller('LoginController', function($scope, $location, account) {
	$scope.users;
	$scope.log = function(email) {
		console.log(email);
	};
	console.log('hello');
	account.all()
	.success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});