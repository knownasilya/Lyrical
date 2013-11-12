App.SongsRoute = Ember.Route.extend({
  model: function () {
    var store = this.get('store');   
    
    return store.find('song').then(null, function () {
      return new Ember.RSVP.Promise(function (resolve, reject) {
        resolve([
          Ember.Object.create({
            id: 1,
            title: 'Amazing Grace'
          })
        ]);
      });
    });
  }
});
