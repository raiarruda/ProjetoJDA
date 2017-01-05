(function() {

	angular.module('MiniMercado.Produtos').controller('ProdutosListController', ProdutosListController);

	ProdutosListController.$inject = ['$scope', '$cookies', 'ProdutoService', 'CarrinhoService'];

	function ProdutosListController($scope, $cookies, ProdutoService, CarrinhoService) {
        
            
		$scope.adicionarProdutoNoCarrinho = function(produto) {
			CarrinhoService.adicionarProduto(produto);
		};
		$scope.removerProdutoNoCarrinho = function(produto) {
			CarrinhoService.removerProduto(produto);
		};

		function carregarListaDeProdutos() {    
	        var mission = GetParameterValues('mission');
	        
	        if(mission == null)
	        {
	        	mission = $cookies.get('Mission');
	        }
	        else
	        {
	        	$cookies.put('Mission', mission);
	        }
        
			ProdutoService.list(mission).then(function(produtos) {
				$scope.produtos = produtos;
			});
		}

		(function init() {
			carregarListaDeProdutos();
		})();
	}

    function GetParameterValues(param) {  
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
        for (var i = 0; i < url.length; i++) {  
            var urlparam = url[i].split('=');  
            if (urlparam[0] == param) {  
                return urlparam[1];  
            }  
        }  
    }  
})(); 