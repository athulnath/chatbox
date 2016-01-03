var express  = require('express'),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    cookieParser = require("cookie-parser"),
    session = require("express-session");

var server = require('http').Server(app);
var io = require('socket.io')(server);
var MongoConnector = require("./dbFactory/mongodb/mongoConnector.js");
MongoConnector.initDb();

var app = express();
var users = {};
var sockets = {};

//app basic settings
app.use(express.static("www"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


//express/mongo session storage
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//require other modules
app.use(require('./controllers'));

//init server
app.listen(8080, "", function() {
  console.log("chatbox started on 8080!!!");
});







/*
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

});*/