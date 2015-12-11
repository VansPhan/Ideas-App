angular.module('ideas-services', [])
.factory('account', ['$http', function accountFactory($http) {
  return {
    users: function() {
      return $http({ method: 'GET', url: 'http://localhost:8080/ideas-webservices/api/users' });
    },
    gmail: function(email, first_name, last_name) {
      return $http({ method: 'PUT', url: 'http://localhost:8080/ideas-webservices/api/users/' + email, data: { "email": email, "first_name": first_name, "last_name": last_name } });
    }
  };
}]);