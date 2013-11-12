App.SongPlayRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('song');
  }
});
