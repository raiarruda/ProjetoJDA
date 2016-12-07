var app = angular.module('mainApp', ['ngRoute]']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'index.html'
	}).when('/login', {
		templateUrl : 'login2.html'
	}).otherwise({
		redirectTo : '/'
	});

});

app.controller('loginController', function($scope, $location) {
	$scope.submeter = function() {
	};
	var nomeUsuario = $scope.nomeUsuario;
	var senha = $scope.senha;

	if ($scope.nomeUsuario == 'admin' && $scope.senha == 'admin') {
		$location.path('/');
	}

});


});
