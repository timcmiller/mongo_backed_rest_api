module.exports = function(app) {
  app.controller('BustedController', ['$scope', '$http', function($scope, $http) {
    $scope.busted = '';

    $scope.get = function() {
        $http.get('/api/busted')
          .then(function(res) {
            $scope.busted = res.data.busted;
          }, function(err) {
            console.log(err.data);
        });
      };
  }]);
};
