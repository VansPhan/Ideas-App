angular.module('ideas')
.controller('LoginController', function($http, $scope) {
	$scope.mainUser;
	$scope.users;
	$scope.login = function(email) {
		angular.forEach($scope.users, function(val, key) {
			if (val['email'] == email) {
				$location.path('/home');
			} else {
				$location.path('/fail-login');
			};
		});
	};
	$http({ method: 'GET', url: 'http://localhost/ideas-webservices/api/users' }).success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});
