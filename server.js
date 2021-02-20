//Dependencies.
var express = require('express');
var bodyParser = require('body-parser');

var port = 9001;

var app = express();

console.log(__dirname);

app.use(express.static(__dirname));
app.use(bodyParser.json());


app.listen(port, function() {
  console.log('Magic! Listening on port: ', port);
});