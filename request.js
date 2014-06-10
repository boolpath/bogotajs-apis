// REQUEST OPTIONS
var http = require('http');

var httpOptions = {
    hostname:   'localhost',
    port:       '8080',
    path:       '',
    method:     'GET',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
};

// REQUEST CALL
var req = http.request(httpOptions, function(res) {
    
});