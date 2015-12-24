var StudentEntryView = Backbone.View.extend({
  tagName: 'span',
  template: _.template("<img class=profPic src=<%=image  %>>"),
  initialize: function (){

  },

  render: function (){
    return this.$el.html(this.template(this.model.attributes))
  }
});