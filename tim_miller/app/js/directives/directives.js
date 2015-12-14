module.exports = function(app) {
  require('./form_directive/form_directive.js')(app);
  require('./list_directive/list_directive.js')(app);
  require('./view_directive/view_directive.js')(app);
};
