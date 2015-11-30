angular.module('login-services', [])
.factory('login', ['$scope', function loginFactory($scope) {
  return {
    redirect: function(email) {
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
	}
  };
}]);