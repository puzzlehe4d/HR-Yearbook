// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    'cohort/:cohortId': 'cohort'
  },

  landing: function() {
     // $('#page-content-container').html(new LandingView().render());
  },
  cohort: function (cohortId){

    var view = new StudentsView({collection: new Students({cohort: cohortId})})



  }
});