module.exports = function(app) {
  app.controller('OfficersController', ['$scope', '$http', 'busted', function($scope, $http, busted) {
    $scope.officers = [];
    $scope.errors = [];
    $scope.newOfficer = null;
    var officerResource = busted('officers');

    $scope.getAllOfficers = function() {
      officerResource.getAll(function(err, data) {
        if (err) return err;

        $scope.officers = data;
      });
    };

    $scope.create = function(officer) {

      officerResource.create(officer, function(err, data) {
        if (err) return err;
        $scope.officers.push(data);
        $scope.newOfficer = null;
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
      officer.tempName = '';
      officer.editing = false;
      $http.put('/api/officers/' + officer._id, officer)
        .then(function(res) {
          console.log('this officer has a new name');
        }, function(err) {
          $scope.errors.push('could not get officer: ' + officer.name);
          console.log(err.data);
      });
    };

    $scope.temp = function(officer) {
      officer.editing = true;
      officer.tempName = officer.name;

    };

    $scope.cancel = function(officer) {
      officer.editing = false;
      officer.name = officer.tempName;
    };

  }]);
};
