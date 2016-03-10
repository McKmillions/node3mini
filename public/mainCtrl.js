angular.module('weatherFabulous').controller('mainCtrl', function($scope, $http){

  $scope.selectedCities = [];

  $scope.pushCities = function(city){
    $scope.selectedCities.push(city);
  }

  $scope.getCities = function(){
    $http.get('/api/cities').then(function(res){
      console.log(res.data.cities)
      $scope.cities = res.data.cities;
    })
  }();


})
