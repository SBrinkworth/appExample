var users = require('../models/user');

module.exports = {
	addUserId: function(req, res, next) {
		req.body.id = users.length + 1;
		next();
	},

	findUserId: function(req, res, next) {
		var name = req.session.user.name;

		for (var i = 0; i < users.length; i++) {
			if (name === users[i].name) {
				req.body.sender = users[i].id;
				next();
			}
		}
		res.send('Username not found');
	}
};
