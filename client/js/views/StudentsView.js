var StudentsView = Backbone.View.extend({
el: '#page-content-container',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render)

  },

  render: function() {
    this.$el.html('');
    this.$el.append(
      this.collection.map(function(student){
        return new StudentEntryView({model: student}).render();
      })
    )
    return this;
  }

});