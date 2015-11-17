angular.module('ideas')
.controller('LoginController', function($http, $scope, $location) {
	$scope.mainUser;
	$scope.users;
	$scope.login = function(email) {
		for (var i = 0; i < $scope.users.length; i++) {
			console.log($scope.users[i]);
		};
		// 	switch(email) {
		// 		case 
		// 	}
		// 	if (val['email'] == email) {
		// 		$location.path('/home');
		// 	} else {
		// 		$location.path('/fail-login');
		// 	};
		});
	};
	$http({ method: 'GET', url: 'http://localhost/ideas-webservices/api/users' }).success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});
