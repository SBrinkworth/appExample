// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("loginCtrl", function($scope, $state, userService) {

		// VARIABLES
		// ============================================================


		// FUNCTIONS
		// ============================================================
		$scope.addUser = function(user) {
			userService.createUser(user)
				.then(function(response) {
					$state.go('chat');
				});
		};

	});
