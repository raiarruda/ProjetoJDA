angular.module("minimercado").controller("usuariosController", function($scope) {

	$scope.usuarios = [{
		nome : "raissa",
		senha : "1234"
	}, {
		nome : "paulo",
		senha : "1234"
	}, {
		nome : "emanuel",
		senha : "1234"
	}];

	$scope.adicionaUsuario = function(usuario) {
		$scope.carrinho.push(usuario);
	};

}); 