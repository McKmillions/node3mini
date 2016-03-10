angular.module('weatherFabulous').service('mainSvc', function($http, $q){
  this.getCities = function(){
    return $http.get('/api/cities');
  };

});
