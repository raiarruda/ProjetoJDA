(function (){

    angular.module('MiniMercado.Produtos')
        .service('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['$q','$http'];

    function ProdutoService($q, $http){
        var data = [];

        function list(){
            var defer = $q.defer();
           	 $http.get('app/data/produtos.json').then(function (data){
                 defer.resolve(data.data.data);
                 console.log(data.data);
             });

           // defer.resolve(data);
            return defer.promise;
        }

        return {
            list: list
        };

    }

})();