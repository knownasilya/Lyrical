App.SearchResultsController = Ember.ArrayController.extend({
  hasOneResult: Ember.computed.equal('content.length', 1)
});
