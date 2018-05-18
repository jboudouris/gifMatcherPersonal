// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);

app.use('/src', express.static(__dirname + '/src'));
app.use('/images', express.static(__dirname + '/src/images'));
app.use('/js', express.static(__dirname + '/src/js'));
app.use('/css', express.static(__dirname + '/src/css'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'src/index.html'));
});

app.get('/game.html', function(request, response) {
  response.sendFile(path.join(__dirname, 'src/game.html'));
});

// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});
