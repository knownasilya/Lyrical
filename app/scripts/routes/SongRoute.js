App.SongRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('song', params.song_id);
  }
});
