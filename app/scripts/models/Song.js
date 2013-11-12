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

App.SongSerializer = DS.RESTSerializer.extend({
  normalize: function (type, hash, property) {
    hash.id = hash._id;
    delete hash._id;

    return this._super(type, hash, property);
  }
});

App.Song = DS.Model.extend({
  title: DS.attr('string'),
  lyric: DS.attr('array') 
});
