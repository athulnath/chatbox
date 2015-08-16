var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function() {
	console.log("chatbox runnning at 8080");
});

app.get('/', function (req, res) {
  res.send("OK");
});

io.on('connection', function (socket) {
  console.log("user connected");
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on("disconnect", function() {
  	console.log("user disconnected");
  });

});