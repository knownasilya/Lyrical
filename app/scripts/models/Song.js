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