var mongodb = require('mongodb'),
  Db = mongodb.Db,
  Server = mongodb.Server,
  MongoClient = mongodb.MongoClient,
  dbHost = process.env.MDB_DEV_HOST,
  dbPort = process.env.MDB_DEV_PORT,
  dbName = process.env.MDB_DEV_DB,
  dbUser = process.env.MDB_DEV_USER,
  dbPass = process.env.MDB_DEV_PASS,
  server = new Server(dbHost, dbPort),
  mongoClient = new MongoClient(server),
  store,
  // Models
  Model,
  Feature,
  User;

// Open and Authenticate Database connection
mongoClient.open(function (error, mongoClient) {
  var db = mongoClient.db(dbName);

  db.authenticate(dbUser, dbPass, function (error) {
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