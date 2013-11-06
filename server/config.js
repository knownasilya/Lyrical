var yamlConfig = require('yaml-config'),
  path = require('path'),
  PROJECT_DIR = process.cwd(),
  env = process.env.NODE_ENV || 'development', 
  conf = yamlConfig.readConfig(path.join(PROJECT_DIR, 'config.yaml'), env),
  db = conf.database;

exports.db = db;
exports['PROJECT_DIR'] = PROJECT_DIR;
exports.conf = conf;
