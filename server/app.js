var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var users = {};
var sockets = {};

server.listen(8080, function() {
	console.log("chatbox runnning at 8080");
});

app.get('/', function (req, res) {
  res.send("OK");
});

io.on('connection', function (socket) {

  socket.on('init', function(username) {
    users[username] = socket.id;
    sockets[socket.id] = {username: username, socket: socket};
  });

  socket.emit('chat', { message: 'world' });

  socket.on('chat', function (to, data) {
    sockets[users[to]].socket.emit('chat', data);
  });

  socket.on("disconnect", function() {
  	console.log("user disconnected");
  });

});