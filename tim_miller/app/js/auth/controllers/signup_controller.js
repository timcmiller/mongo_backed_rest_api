module.exports = function(app) {
  app.controller('SignupController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
    $scope.headingText = 'New User';
    $scope.buttonText = 'Create User';
    $scope.authenticate = function(user) {
      $http.post('/api/signup', user)
        .then(function(res) {
          $cookies.put('token', res.data.token);
          $scope.getUser();
          $location.path('/');
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.changePlaces = function() {
      $location.path('/signin');
    };


  }]);
};
