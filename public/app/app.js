// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		// INITILIZE STATES
		// ============================================================
		$stateProvider

		// LOGIN STATE
			.state('login', {
			url: '/login',
			templateUrl: './app/routes/login/loginTmpl.html',
			controller: 'loginCtrl'
		})

		// CHAT STATE
		.state('chat', {
			url: '/chat',
			templateUrl: './app/routes/chat/chatTmpl.html',
			controller: 'chatCtrl',
			resolve: {
				users: function(userService) {
					return userService.getUsers();
				},
				chats: function(chatService) {
					return chatService.getChats();
				}
			}
		});



		// ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('/login');
	});
