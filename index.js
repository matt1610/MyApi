var express = require('express');
var app = express();
var mongo = require('mongodb');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectID;
var heart = require('./modules/heart.js');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/api', function(request, response) {
  	response.send('Working!');
});

app.get('/api/stats', function (request, response) {
  	response.send(heart.DummyData());
});

app.get('/bronzecam', function(request, response) {
	response.sendfile('pages/bronzecam.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});




