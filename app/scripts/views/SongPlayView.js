App.SongPlayView = Ember.View.extend({
  classNames: ['reveal', 'center', 'simple'],

  didInsertElement: function () {
    Reveal.initialize();
  }
});
