// INITILIZE SERVICE
// ============================================================
angular.module("app")
	.service("userService", function($http) {

		// CRUD FUNCTIONS
		// ============================================================
		this.getUsers = function() {
			return $http({
					method: 'GET',
					url: '/api/user'
				})
				.then(function(response) {
					return response.data;
				});
		};
		this.createUser = function(user) {
			return $http({
					method: 'POST',
					url: '/api/user',
					data: user //req.body = {name: 'Bobby'}
				})
				.then(function(response) {
					return response.data;
				});
		};

		// OTHER FUNCTIONS
		// ============================================================


	});
