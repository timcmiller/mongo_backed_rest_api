module.exports = function(app) {
  require('./controllers/officer_controller')(app);
  require('./directives/officer_form_directive')(app);

};
