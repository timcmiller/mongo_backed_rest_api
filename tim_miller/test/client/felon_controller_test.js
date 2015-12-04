require(__dirname + '/../../app/js/entry.js');
require('angular-mocks');

describe('felon controller', function() {

  var $httpBackend;
  var $ControllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('OfficerAndFelonApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var controller = $ControllerConstructor('FelonsController', {$scope: $scope});
    expect(typeof $scope).toBe('object');
    expect(typeof controller).toBe('object');
    expect(Array.isArray($scope.felons)).toBe(true);
  });


});
