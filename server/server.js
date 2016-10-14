// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');

// CONTROLLERS
// ============================================================
var userCtrl = require('./controllers/userCtrl');
var chatCtrl = require('./controllers/chatCtrl');
var middleware = require('./middleware/middleware');

// INITILIZE APP
// ============================================================
var app = express();

// INITILIZE DEPENDENCIES
// ============================================================
var sessionOptions = {
	secret: 'a;sldkfja;lskdfjas;dlk.jasf;lk.asjv ,sjfhng lzk'
};
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));
app.use(session(sessionOptions));

// ENDPOINTS
// ============================================================
// USER ENDPOINTS
app.get('/api/user', userCtrl.getUsers);
app.post('/api/user', middleware.addUserId, userCtrl.postUser);

// CHAT ENDPOINTS
app.get('/api/chat', chatCtrl.getChats);
app.post('/api/chat', middleware.findUserId, chatCtrl.postChat);


// VARIABLES
// ============================================================
var port = 3000;

// LISTEN
// ============================================================
app.listen(port, function() {
	console.log('listening on port ', port);
});
