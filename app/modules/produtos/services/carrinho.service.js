(function () {

    angular.module('MiniMercado.Produtos')
        .service('CarrinhoService', CarrinhoService);

    CarrinhoService.$inject = ['$q'];

    function CarrinhoService($q) {

        var compra  = {
            itens: {}
        };

        function adicionarProduto(produto){
            if(compra.itens[produto.id]){
                compra.itens[produto.id]++;
            } else {
                compra.itens[produto.id] = 1;
            }
        }

        function removerProduto(produto, quantidade){
            console.log('falta implementar');
        }

        function getItensNoCarrinho(){
            return compra.itens;
        }

        return {
            getItensNoCarrinho: getItensNoCarrinho,
            adicionarProduto: adicionarProduto,
            removerProduto: removerProduto
        };

    }

})();