require(__dirname + '/../../app/js/entry.js');
require('angular-mocks');

describe('officer controller', function() {
  var $httpBackend;
  var $ControllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('OfficerAndFelonApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
    console.log('outside beforeEach');
  }));

  it('should be able to create a controller', function() {
    var controller = $ControllerConstructor('OfficersController', {$scope: $scope});
    expect(typeof $scope).toBe('object');
    expect(typeof controller).toBe('object');
    expect(Array.isArray($scope.officers)).toBe(true);
  });

  describe('REST requests', function() {

    beforeEach(angular.mock.inject(function(_$httpBackend_, $rootScope) {
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
      $ControllerConstructor('OfficersController', {$scope: $scope});
      console.log('inside beforeEach');

    }));

    afterEach(function(){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
      console.log('inside afterEach');
    });

    it('should make a get response when getAllOfficers() is called', function() {
      $httpBackend.expectGET('/api/officers').respond(200, [{_id: 1, name: 'test name'}]);
      $scope.getAllOfficers();
      $httpBackend.flush();
      expect($scope.officers[0]._id).toBe(1);
      expect($scope.officers[0].name).toBe('test name');

    });

    it('should be able to create a new Officer when create() is called', function() {
      $httpBackend.expectPOST('/api/officers', {name: 'test name'}).respond(200, {name: 'a different officer'});

      expect($scope.officers.length).toBe(0);
      $scope.newOfficer = {name: 'test name'};
      $scope.create($scope.newOfficer);
      $httpBackend.flush();
      expect($scope.officers[0].name).toBe('a different officer');
      expect($scope.newOfficer).toBe(null);

    });
  });
});
