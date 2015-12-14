module.exports = function(app) {
  app.directive('listDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: 'templates/list_template.html',
      scope: {
        name: '=',
        attribute: '=',
        attributeTitle: '@'
      }
    };
  });
};
