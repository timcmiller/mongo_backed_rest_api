require('angular/angular');
require('angular-route');
var angular = window.angular;

var officerAndFelonApp = angular.module('OfficerAndFelonApp', ['ngRoute']);
require('./services/services.js')(officerAndFelonApp);
require('./officers/officers.js')(officerAndFelonApp);
require('./felons/felons.js')(officerAndFelonApp);
require('./busted/busted.js')(officerAndFelonApp);

officerAndFelonApp.config(['$routeProvider', function($route) {

  $route
    .when('/officers', {
      templateUrl: '/templates/officers_view.html',
      controller: 'OfficersController'
    })
    .otherwise({
      redirectTo: '/officers'
    });

}]);
