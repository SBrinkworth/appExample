// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("chatCtrl", function($scope, users, chats, chatService, userService) {

		// VARIABLES
		// ============================================================
		$scope.chats = chats;
		$scope.users = users;

		// FUNCTIONS
		// ============================================================
		$scope.addMessage = function(chat) {
			chatService.createChat(chat)
				.then(function(response) {
					$scope.chats = response;
					$scope.getUsers();
				});
		};

		$scope.getUsername = function(id) {
			var user = $scope.users.filter(function(user) {
				if (user.id === id) {
					return user;
				}
			});

			return user[0].name;
		};

		$scope.getUsers = function() {
			userService.getUsers()
				.then(function(response) {
					$scope.users = response;
				});
		};



		$scope.getChats = function() {
			chatService.getChats()
				.then(function(response) {
					$scope.chats = response;
				});
		};

		setInterval(function() {
			$scope.getChats();
			$scope.$apply();
		}, 1000);

	});
