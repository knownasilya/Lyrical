var mongodb = require('mongodb'),
  conf = require('./config'),
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

console.dir(conf);

// Open and Authenticate Database connection
mongoClient.open(function (error, mongoClient) {
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
    mongoClient.db(dbName).collection(collectionName, function (error, collection) {
      if (error) { 
        callback(error);
      }
      else {
        callback(null, collection);
      }
    });
  };
  
  find = function (callback) {
    getCollection(function (error, collection) {
      if (error) {
        callback(error);
      }
      else {
        collection.find().toArray(function (error, results) {
          if (error) {
            callback(error);
          }
          else {
            callback(null, results);
          }
        });
      }
    });
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
