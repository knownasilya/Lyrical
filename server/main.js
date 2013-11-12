var express = require('express'),
  winston = require('winston'),
  url = require('url'),
  path = require('path'),
  models = require('./models'),
  store = models.store,
  Song = store('Songs'),
  app = express(),
  allowedCORSDomains = ['http://localhost:9000'],
  logger,
  allowCORS;


// Setup logging to a file as json.
// use like so: logger.info(message) along with `warn` and `error`
logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'server.log.json',
      level: 'info'
    })
  ]
});

allowCORS = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', allowedCORSDomains);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  next();
};

// GZIP static contents before sending
//app.use(express.compress());
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
app.use(allowCORS);
// Static files
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.get('/api/songs', function (req, res) {
  Song.find(function (error, songs) {
    res.json({ songs: songs });
  });
});


// Start the server, same as http.listen
// '0.0.0.0' is necessary for Nitrous setup
app.listen(3000, '0.0.0.0');
