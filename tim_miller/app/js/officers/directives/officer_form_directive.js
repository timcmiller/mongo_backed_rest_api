module.exports = function(app) {
  app.directive('officerFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: 'templates/officer_form_template.html',
      transclude: true,
      scope: {
        buttonText: '@',
        headingText: '@',
        formName: '@',
        officer: '=',
        save: '&'
      }
    };
  });
};
