require(__dirname + '/../../app/js/entry.js');
require('angular-mocks');

describe('felon controller', function() {

  beforeEach(angular.mock.module('OfficerAndFelonApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    this.scope = $rootScope.$new();
    this.controller = $controller;
  })).bind(this);

  it('should be able to create a controller', function() {
    this.controller = this.controller('FelonsController', {$scope: this.scope});
    expect(typeof $scope).toBe('object');
    expect(typeof this.controller).toBe('object');
    expect(Array.isArray(this.scope.felons)).toBe(true);
  });


});
