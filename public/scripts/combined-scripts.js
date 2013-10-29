(function() {

var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true
});

/* Order and include as you please. */


})();

(function() {

Songs.Store = DS.Store.extend();
Songs.ApplicationAdapter = DS.FixtureAdapter;


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
    return ['hi'];
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
  
});


})();