module.exports = function(app) {
  app.controller('FelonsController', ['$scope', '$http', function($scope, $http) {
    $scope.felons = [];
    $scope.newOfficer = null;

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
  }]);
};
