App.ApplicationSerializer = DS.RESTSerializer.extend({
  extractArray: function (store, type, payload, requestType) {
    var customPayload = {},
      pluralType = type.typeKey.pluralize();
    
    customPayload[pluralType] = payload;

    return this._super(store, type, customPayload, requestType); 
  },

  normalizeHash: {
    songs: function (hash) {
      delete hash.createdAt;
      delete hash.updatedAt;

      return hash;
    }
  }
});
