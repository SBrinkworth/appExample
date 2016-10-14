var users = require('../models/user');

module.exports = {
	getUsers: function(req, res, next) {
		res.send(users);
	},

	postUser: function(req, res, next) {
		users.push(req.body);
		req.session.user = req.body;
		res.send(users);
	}
};
