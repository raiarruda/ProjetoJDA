(function (){

    angular.module('MiniMercado.Produtos')
        .service('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['$q','$http'];

    function ProdutoService($q, $http){
        var data = [];

        for(var i = 0; i < 15; i++){
            data.push({
                id: i,
                nome : 'Produto '+ i,
                descricao : 'Descrição do Produto '+ i,
                preco : '4.0',
                categoria : '1'
            });
        }

        function list(){
            var defer = $q.defer();
            // $http.get('http://localhost:3000/produto').then(function (data){
            //     defer.resolve(data.data.data);
            // });

            defer.resolve(data);
            return defer.promise;
        }

        return {
            list: list
        };

    }

})();