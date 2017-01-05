(function() {

	angular.module('MiniMercado.Produtos').controller('ProdutosCarrinhoController', ProdutosCarrinhoController);

	ProdutosCarrinhoController.$inject = ['$scope', 'ProdutoService', 'CarrinhoService'];

	function ProdutosCarrinhoController($scope, ProdutoService, CarrinhoService) {

		$scope.getItensCarrinho = function() {

			return CarrinhoService.getItensNoCarrinho();
		};
	
		$scope.getValorTotal = function (){
			
			return CarrinhoService.getValorTotal();
		};
		
	
	}

})();
