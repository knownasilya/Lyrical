App.SongPlayView = Ember.View.extend({
  classNames: ['reveal'],
  didInsertElement: function () {
    Reveal.initialize();
  }
});