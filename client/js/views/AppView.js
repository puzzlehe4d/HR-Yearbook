var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {
    // this.studentView = new StudentsView({collection: new Students({cohort: '37'})});
    this.navBarView = new NavBarView();
    options.router.on('route:landing', function() {
      console.log('Hit landing Route')
    }.bind(this));
    this.render();



  },

  renderCohort: function(cohort) {
  },

  renderLanding: function() {
    // $('#page-content-container').html(new LandingView().render());
  },

  render: function (){


  }
})