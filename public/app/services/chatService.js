// INITILIZE SERVICE
// ============================================================
angular.module("app")
	.service("chatService", function($http) {

		// CRUD FUNCTIONS
		// ============================================================
		this.getChats = function() {
			return $http({
					method: 'GET',
					url: '/api/chat'
				})
				.then(function(response) {
					return response.data;
				});
		};
		this.createChat = function(chat) {
			return $http({
					method: 'POST',
					url: '/api/chat',
					data: chat //req.body = {message: 'blah'}
				})
				.then(function(response) {
					return response.data;
				});
		};

		// OTHER FUNCTIONS
		// ============================================================


	});
