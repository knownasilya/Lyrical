App.IndexView = Ember.View.extend({
  submit: function () {
    this.get('controller').send('search');
  }
});
