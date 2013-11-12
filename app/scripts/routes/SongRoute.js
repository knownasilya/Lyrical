App.SongRoute = Ember.Route.extend({
  model: function (params) {
    return Ember.Object.create({
      id: params.song_id
    });
  }
});
