angular.module('ideas')
.controller('LoginController', function($http, $scope, $location) {
	$scope.mainUser;
	$scope.users = dummy_users;
	$scope.login = function(email) {
		for (var i = 0; i < $scope.users.length; i++) {
			console.log($scope.users[i]);
		};
		// if (val['email'] == email) {
		// 	$location.path('/home');
		// } else {
		// 	$location.path('/fail-login');
		// };
	};

	// $http({ method: 'GET', url: 'http://localhost:8080/ideas-webservices/api/users' }).success(function(data) {
	// 	$scope.users = data;
	// 	console.log($scope.users);
	// });
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