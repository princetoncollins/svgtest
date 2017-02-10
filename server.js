//Dependencies.
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var path = require('path');
var fs = require('fs');

var port = 9001;

var app = express();

app.use(express.static(__dirname + ''));
app.use(bodyParser.json());



//Connectivity.
//_________________________________________________________________________________________________________________________

// module.exports = router;

app.listen(port, function() {
  console.log('Magic! Listening on port: ', port);
});