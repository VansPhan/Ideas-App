angular.module('ideas')
.controller('UserController', function($scope, account) {
	$scope.users;
	account.users()
	.success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});