angular.module('ideas')
.controller('LoginController', function($scope, $location, account, login) {
	$scope.users;
	$scope.log = function(email) {
		return login.redirect(email);
	};
	account.all()
	.success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});