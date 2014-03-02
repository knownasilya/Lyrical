App.IndexController = Ember.ObjectController.extend({
  actions: {
    search: function () {
      var searchQuery = this.get('searchQuery');

      this.transitionToRoute('searchResults', searchQuery);
    }
  }
});
