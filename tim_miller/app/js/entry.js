require('angular/angular');
require('angular-route');
var angular = window.angular;

var officerAndFelonApp = angular.module('OfficerAndFelonApp', ['ngRoute']);
require('./directives/directives.js')(officerAndFelonApp);
require('./services/services.js')(officerAndFelonApp);
require('./officers/officers.js')(officerAndFelonApp);
require('./felons/felons.js')(officerAndFelonApp);
require('./busted/busted.js')(officerAndFelonApp);
