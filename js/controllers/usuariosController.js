angular.module("minimercado").controller("usuariosController", function($scope) {

	$scope.usuarios = [];

	$scope.cadastrarUsuario = function(isValid){
		console.log("0");
		
		isValid = $scope.casdatroForm.$valid;
		if ($scope.casdatroForm.$valid) {
			console.log("1");
			adicionaUsuario($scope.cadastroForm.nomeUsuario, $scope.cadastroForm.loginUsuario, $scope.cadastroForm.senhaUsuario);
			
		}
		
		
	};
	
	$scope.adicionaUsuario = function(nomeUsuario, loginUsuario, senhaUsuario) {
		$scope.usuario = {
			nomeUsuario : $scope.nomeUsuario,
			loginUsuario : $scope.loginUsuario,
			senhaUsuario : $scope.senhaUsuario
		};

		$scope.usuarios.push($scope.usuario);
		alert("cadastro realizado");
	};

});

