// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("mainCtrl", function($scope, userService, chatService) {

		// VARIABLES
		// ============================================================


		// FUNCTIONS
		// ============================================================


		$scope.getUsers = function() {
			userService.getUsers()
				.then(function(response) {
					$scope.users = response;
				});
		};
		$scope.getUsers();

		$scope.getChats = function() {
			chatService.getChats()
				.then(function(response) {
					$scope.chats = response;
				});
		};
		$scope.getChats();

		$scope.getUsername = function(id) {
			var user = $scope.users.filter(function(user) {
				if (user.id === id) {
					return user;
				}
			});

			return user[0].name;
		};

	});
