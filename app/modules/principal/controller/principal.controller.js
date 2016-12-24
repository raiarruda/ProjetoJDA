(function() {

	angular.module('MiniMercado.Principal').controller('PrincipalController', PrincipalController);

	PrincipalController.$inject = ['$scope', 'ProdutoService', 'CarrinhoService'];

	function PrincipalController($scope, ProdutoService, CarrinhoService) {
		
		$scope.getTotalItensNoCarrinho = function () {
		  return CarrinhoService.getTotalItensNoCarrinho();
		};

		}

})();
