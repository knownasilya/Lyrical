(function() {

/* jshint unused: false */
var App = window.App = Ember.Application.create({
  // Debug flags enabled.
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_BINDINGS: true,
  RAISE_ON_DEPRECATION: true,
  LOG_STACKTRACE_ON_DEPRECATION: true
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://bc-api-17474.use1.actionbox.io:4000'
});

DS.JSONSerializer.reopen({
  primaryKey: '_id'
});


/* Order and include as you please. */


})();

(function() {

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.create()
});


})();

(function() {

DS.ArrayTransform = DS.Transform.extend({
    deserialize: function(deserialized) {
        // ...
        return deserialized;
    },

    serialize: function(serialized) {
        // ...
        return serialized;
    }
});

App.register('transform:array', DS.ArrayTransform);

App.Song = DS.Model.extend({
  title: DS.attr('string'),
  lyric: DS.attr('array') 
});

})();

(function() {

App.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the
  // top level ApplicationRoute; we're in transition... :-)
  model: function () {
    return [];
  }
});


})();

(function() {

App.SongsRoute = Ember.Route.extend({
  model: function () {
    var store = this.get('store');   
    
    return store.find('song');
  }
});

})();

(function() {

App.SongPlayView = Ember.View.extend({
  classNames: ['reveal'],
  didInsertElement: function () {
    Reveal.initialize();
  }
});

})();

(function() {

App.Router.map(function () {
  this.route('songs');
  this.resource('song', { path: 'song/:song_id' }, function () {
    this.route('play');
  });
});


})();