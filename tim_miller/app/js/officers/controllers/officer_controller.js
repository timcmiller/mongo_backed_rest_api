module.exports = function(app) {
  app.controller('OfficersController', ['$scope', '$http', function($scope, $http) {
    $scope.officers = [];
    $scope.errors = [];
    $scope.newOfficer = null;

    $scope.getAllOfficers = function() {
      $http.get('/api/officers')
        .then(function(res) {
          $scope.officers = res.data;
        }, function(err) {
          console.log(err.data);
      });
    };

    $scope.create = function(officer) {
      $http.post('api/officers', officer)
        .then(function(res) {
          $scope.officers.push(res.data);
          $scope.newOfficer = null;
        }, function(err) {
          console.log(err.data);
      });
    };

    $scope.remove = function(officer) {
      $scope.officers.splice($scope.officers.indexOf(officer), 1);
      $http.delete('/api/officers/' + officer._id)
        .then(function(res) {
          console.log('Done');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('Could not delete Officer: ' + officer.name);
          $scope.getAllOfficers();
      });
    };

    $scope.update = function(officer) {
      officers.editing = false;
      $http.put('/api/officers/' + officer._id, officer)
        .then(function(res) {
          console.log('this officer has a new name');
        }, function(err) {
          $scope.errors.push('could not get officer: ' + officer.name);
          console.log(err.data);
      });
    };
  }]);
};
