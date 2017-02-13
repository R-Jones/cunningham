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
    $scope.result = function() {
    	return 'food';
    };
  });
