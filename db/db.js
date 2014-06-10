/* NODE MODULES */
var mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient;

// DATABASE CONNECTION
mongoClient.connect('mongodb://localhost:27017/bogotajs' , function (err, db) {
    db.collection('users', function (err, collection) {
        collection.find().toArray(function (err, elements) {
            
        });
    })
});