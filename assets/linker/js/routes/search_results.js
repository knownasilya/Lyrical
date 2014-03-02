App.SearchResultsRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('song', { title: params.title });
  },

  serialize: function (model, params) {
    if (model && model.query) {
      return { title: model.query.title };
    }
    else if (model && model.get('content.firstObject')) {
      return { title: model.get('content.firstObject.' + params[0]) };
    }
    else {
      return { title: 'undefined' };
    }
  }
});
