angular.module('ideas')
.controller('LoginController', function($http, $scope) {
	$scope.users;
	$scope.login = function() {
		angular.forEach($scope.users, function(val, key) {
			console.log(val);
			console.log(key);
		});
	};
	$http({ method: 'GET', url: 'http://localhost/ideas-webservices/api/users' }).success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});
