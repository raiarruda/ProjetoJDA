angular.module("minimercado").controller("produtosController", function($scope) {

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