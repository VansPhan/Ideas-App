angular.module('ideas-services', ['ngResource']).
    factory('ideasCall', function($resource){
    return $resource('http://localhost\\:3000/realmen/:entryId', {}, {
      query: {method:'GET', params:{entryId:''}, isArray:true},
      post: {method:'POST'},
      update: {method:'PUT'},
      remove: {method:'DELETE'}
  	});
   });