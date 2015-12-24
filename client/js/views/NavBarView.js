var NavBarView = Backbone.View.extend({

  el: '#navbar-container',
  initialize: function() {
    this.render();
  },
  events: {
    'click .nav': 'onClick'
  },
  onClick: function (){
    console.log('clicked')
    // var $li = $(e.target);
    // router.navigate($li.attr('data-url'), {trigger: true})
  },

  render: function() {

   // this.$el.html('<span class="nav">HR 36</span>&nbsp<span class="nav">HR 37</span>');
   return this;
  }

});

