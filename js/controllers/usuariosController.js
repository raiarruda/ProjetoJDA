angular.module("minimercado").controller("usuariosController", function($scope) {

	$scope.usuarios = [];

	$scope.adicionaUsuario = function(nomeUsuario, loginUsuario, senhaUsuario) {
		$scope.usuario = {
			nomeUsuario : $scope.nomeUsuario,
			loginUsuario : $scope.loginUsuario,
			senhaUsuario : $scope.senhaUsuario
		};

		$scope.usuarios.push($scope.usuario);
	};

});

