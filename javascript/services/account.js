angular.module('ideas-services', [])
.factory('account', ['$http', function accountFactory($http) {
  return {
    all: function() {
      return $http({ method: 'GET', url: 'http://localhost:8080/ideas-webservices/api/users' });
    }
  };
}]);