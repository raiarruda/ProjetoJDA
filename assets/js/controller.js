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

angular.module("produtos", []);
angular.module("produtos").controller("produtosController", function($scope) {

	$scope.produtos = [{
		image : "assets/images/thumb253-1.jpg",
		nome : "produto1",
		descricao : "teste1",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-2.jpg",
		nome : "produto2",
		descricao : "teste2",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-3.jpg",
		nome : "produto3",
		descricao : "teste3",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-1.jpg",
		nome : "produto1",
		descricao : "teste1",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-2.jpg",
		nome : "produto2",
		descricao : "teste2",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-3.jpg",
		nome : "produto3",
		descricao : "teste3",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-1.jpg",
		nome : "produto1",
		descricao : "teste1",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-2.jpg",
		nome : "produto2",
		descricao : "teste2",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-3.jpg",
		nome : "produto3",
		descricao : "teste3",
		preco : "4.0",
		categoria : "limpeza"
	}, {
		image : "assets/images/thumb253-4.jpg",
		nome : "produto4",
		descricao : "teste4",
		preco : "4.0",
		categoria : "limpeza"
	}];
	$scope.carrinho = [];
	$scope.adicionaNoCarrinho = function(produto) {
		$scope.carrinho.push(produto);
	};

});

angular.module("usuarios", []);
angular.module("usuarios").controller("usuariosController", function($scope) {
	$scope.usuarios=[];
	$scope.adicionarUsuario = function(usuario,senha) {

		$scope.usuarios.push({usuario: usuario, senha:senha });
	};

});
