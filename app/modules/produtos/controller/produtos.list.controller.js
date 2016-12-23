(function (){

    angular.module('MiniMercado.Produtos')
        .controller('ProdutosListController',ProdutosListController);

    ProdutosListController.$inject = ['$scope', 'ProdutoService', 'CarrinhoService'];

    function ProdutosListController($scope, ProdutoService, CarrinhoService){
        
        $scope.adicionarProdutoNoCarrinho = function (produto){
            CarrinhoService.adicionarProduto(produto);
        };


        function carregarListaDeProdutos(){
            ProdutoService.list().then(function (produtos) {
                $scope.produtos = produtos;
            });
        }

        (function init(){
            carregarListaDeProdutos();
        })();
    }

})();