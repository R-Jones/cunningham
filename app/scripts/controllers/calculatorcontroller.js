'use strict';

/**
 * @ngdoc function
 * @name cunninghamApp.controller:CalculatorcontrollerCtrl
 * @description
 * # CalculatorcontrollerCtrl
 * Controller of the cunninghamApp
 */
angular.module('cunninghamApp')
  .controller('CalculatorcontrollerCtrl', function ($scope) {
    $scope.measurementChange = function() {
      $scope.displayMass = ($scope.unitOfMeasurement == "Pounds") ? Math.round($scope.mass * 2.2) : $scope.mass;
    }
    $scope.displayMassChange = function() {
      $scope.mass = ($scope.unitOfMeasurement == "Pounds") ? $scope.displayMass / 2.2 : $scope.displayMass;
    }
    $scope.mass = 70;
    $scope.displayMass = $scope.mass;
    $scope.simpleresult = $scope.mass + $scope.bfPercentage;
    $scope.unitOptions = ["Kilograms", "Pounds"];
    $scope.unitOfMeasurement = $scope.unitOptions[0];
    $scope.bfPercentage = 16;
    $scope.proteinFactor = 0.15;
    $scope.NEAT = 1.5;
    $scope.result = function() {
      var ffm = (100 - $scope.bfPercentage) / 100.0 * $scope.mass;
      var rmr = 500 + (22 * ffm)
      var tef = $scope.proteinFactor * rmr
      var caloricNeeds = Math.floor(rmr * $scope.NEAT + tef)
      var dict = {'a':5, 'b':7};
      return 'Total Calorie Needs: ' + caloricNeeds;
    };
  });
