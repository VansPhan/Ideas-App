angular.module('ideas')
.controller('LoginController', function($scope, $location, account) {
	$scope.users;
	$scope.log = function(email) {
		if ($scope.email_validation(email) == false) {
			window.alert("Not a valid whirlwind email");
			return null;
		}
		if ($scope.users.length == undefined) {
			if ($scope.users['email'] == email) {
					$location.path('/home');
				} else {
					$location.path('/fail-login');
				}
		} else {
			for (i = 0; i < $scope.users.length; i++) {
				if ($scope.users[i]['email'] == email) {
						$location.path('/home');
						break;
				} else {
					$location.path('/fail-login');
				};
			};
		};
	};
	$scope.email_validation = function(email) {
		var regex = /^[A-Za-z0-9._%+-]+@wwindtech.com$/;
		return regex.test(email);
	};
	account.all()
	.success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});