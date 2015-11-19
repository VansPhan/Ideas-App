angular.module('ideas')
.controller('LoginController', function($http, $scope, $location) {
	$scope.users;
	$scope.login = function(email) {
		if ($scope.users.length == undefined) {
			if ($scope.users['email'] == email) {
					$location.path('/home');
				} else {
					$location.path('/fail-login');
				};
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

	$http({ method: 'GET', url: 'http://localhost:8080/ideas-webservices/api/users' }).success(function(data) {
		$scope.users = data;
		console.log($scope.users);
	});
});


var dummy_users = 
	[{
		"dateCreated":"2015-10-31T00:00:00",
		"email":"test@wwindtech.com",
		"firstName":"testFirstName",
		"lastName":"testLastName",
		"status":"Active",
		"userId":1,
		"userType":"user"
	},
	{
		"dateCreated":"2015-10-31T00:00:00",
		"email":"test1@wwindtech.com",
		"firstName":"test",
		"lastName":"test",
		"status":"Active",
		"userId":2,
		"userType":"admin"
	}];