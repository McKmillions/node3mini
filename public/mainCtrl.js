angular.module('weatherFabulous').controller('mainCtrl', function($scope, $http, mainSvc){

  $scope.selectedCities = [];

  $scope.pushCities = function(city){
    // Push cities to selectedCities arry

  };

  $scope.getCities = function(){
    // Get cities from the server
    mainSvc.getCities()
            .then(function(cities, err){
              if (err){
                console.log(err);
                // return $scope.cities = [];
              }
              $scope.selectedCities = cities.data;
            });

  };
  $scope.getCities();

});
