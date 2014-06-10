/* NODE MODULES */
var http = require('http'),
    express = require('express'),
    mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient,
    bodyParser = require('body-parser');

// API SERVER
api = express();

// API ROUTES
api.get('/', function (req, res) {

});