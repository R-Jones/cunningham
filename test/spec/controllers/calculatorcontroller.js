'use strict';

describe('Controller: CalculatorcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('cunninghamApp'));

  var CalculatorcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculatorcontrollerCtrl = $controller('CalculatorcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
