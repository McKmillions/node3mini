angular.module('weatherFabulous').controller('mainCtrl', function($scope, $http, mainSvc){

  $scope.selectedCities = [];

  $scope.pushCities = function(city){
    // Push cities to selectedCities arry
  }

  $scope.getCities = function(){
    // Get cities from the server
  };

  $scope.getCities();


})
