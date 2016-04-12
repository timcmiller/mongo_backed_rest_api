require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var angular = window.angular;

var officerAndFelonApp = angular.module('OfficerAndFelonApp', ['ngRoute', 'ngCookies', 'base64']);
require('./directives/directives.js')(officerAndFelonApp);
require('./services/services.js')(officerAndFelonApp);
require('./officers/officers.js')(officerAndFelonApp);
require('./felons/felons.js')(officerAndFelonApp);
require('./busted/busted.js')(officerAndFelonApp);
require('./auth/auth.js')(officerAndFelonApp);

officerAndFelonApp.config(['$routeProvider', function($route) {

}]);
