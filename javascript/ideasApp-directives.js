
  var app = angular.module('ideasApp-directives', []);

  app.directive('loginpage', function() {
  return {
    restrict: 'E',
    templateUrl: 'login/login-page.html'
  };
});

