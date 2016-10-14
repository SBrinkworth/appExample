var chats = require('../models/chat');

module.exports = {
	// {message: 'hello', id: 1, posted: 1,2,3}
	// {message: 'hello', posted: 1/2/3/, sender: 1}
	postChat: function(req, res, next) {
		req.body.posted = new Date();
		chats.push(req.body);
		res.send(chats);
	},

	getChats: function(req, res, next) {
		res.send(chats);
	}
};
