angular.module('ideas')
.controller('LoginController', function($http, $scope) {
	$scope.users;
	$scope.login = function(email) {
		angular.forEach($scope.users, function(val, key) {
			if (val['email'] == email) {
				console.log("It match!");
			} else {
				console.log("No match");
			};
		});
	};
	$scope.update = function() {
		
	};
	$http({ method: 'GET', url: 'http://localhost/ideas-webservices/api/users' }).success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});
