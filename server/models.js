var mongodb = require('mongodb'),
  Q = require('q'),
  conf = require('./config'),
  ObjectID = mongodb.ObjectID,
  Db = mongodb.Db,
  Server = mongodb.Server,
  MongoClient = mongodb.MongoClient,
  server = new Server(conf.db.host, conf.db.port),
  mongoClient = new MongoClient(server),
  store,
  // Models
  Model,
  Feature,
  User;

// Open and Authenticate Database connection
mongoClient.open(function (error, mongoClient) {
  if (error) {
    console.log(error);
    return;
  }

  var db = mongoClient.db(conf.db.name);

  db.authenticate(conf.db.user, conf.db.pass, function (error) {
    if (error) {
      console.log('Error connecting to database: ' + error);
    }
    else {
      console.log('Connected to Database.');
    }
  });
});

// Retreive records from Database
store = function (collectionName) {
  var getCollection,
    find;
  
  getCollection = function (callback) {    
    // Open/Auth DB connection
    mongoClient.db(conf.db.name).collection(collectionName, function (error, collection) {
      if (error) { 
        callback(error);
      }
      else {
        callback(null, collection);
      }
    });
  };
  
  find = function (id) {
    var deferred = Q.defer();

    getCollection(function (error, collection) {
      var result;

      if (error) {
        deferred.reject(error);
      }
      else {
        if (id) {
          id = new ObjectID(id);
          result = collection.findOne({ _id: id }, function (error, song) {
            if (error) {
              deferred.reject(error);
            }
            else {
              deferred.resolve(song);
            }
          });
        }
        else {
          collection.find().toArray(function (error, results) {
            if (error) {
              deferred.reject(error);
            }
            else {
              deferred.resolve(results);
            }
          });
        }
      }
    });

    return deferred.promise;
  };
  
  return {
    collectionName: collectionName,
    find: find
  }
};

function Model (collection) {
  this.collection = collection;
}

Model.prototype = {  
  save: function () {
    console.log('saved!');
  }
};


Song = function (collection) {
  Model.call(this, collection);
};


exports.store = store;
exports.Song = Song;
