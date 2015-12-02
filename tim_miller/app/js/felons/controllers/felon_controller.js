module.exports = function(app) {
  app.controller('FelonsController', ['$scope', '$http', function($scope, $http) {
    $scope.felons = [];
    $scope.newFelon = null;

    $scope.getAllFelons = function() {
      $http.get('/api/felons')
        .then(function(res) {
          $scope.felons = res.data;
        }, function(err) {
          console.log(err.data);
      });
    };

    $scope.create = function(felon) {
      $http.post('api/felons', felon)
        .then(function(res) {
          $scope.felons.push(res.data);
          $scope.newFelon = null;
        }, function(err) {
          console.log(err.data);
      });
    };

    $scope.remove = function(felon) {
      $scope.felons.splice($scope.felons.indexOf(felon), 1);
      $http.delete('/api/felons/' + felon._id)
        .then(function(res) {
          console.log('Done');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('Could not delete felon: ' + felon.name);
          $scope.getAllfelons();
      });
    };

    $scope.update = function(felon) {
      felon.tempName = '';
      felon.editing = false;
      $http.put('/api/felons/' + felon._id, felon)
        .then(function(res) {
          console.log('this felon has a new name');
        }, function(err) {
          $scope.errors.push('could not get felon: ' + felon.name);
          console.log(err.data);
      });
    };

    $scope.temp = function(felon) {
      felon.editing = true;
      felon.tempName = felon.name;
    };

    $scope.cancel = function(felon) {
      felon.editing = false;
      felon.name = felon.tempName;
    };

  }]);
};
