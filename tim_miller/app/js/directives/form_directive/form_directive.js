module.exports = function(app) {
  app.directive('formDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: 'templates/form_template.html',
      transclude: true,
      scope: {
        buttonText: '@',
        headingText: '@',
        formName: '@',
        resource: '=',
        save: '&'
      }
    };
  });
};
