(function (){

    angular.module('MiniMercado.Produtos')
        .service('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['$q','$http'];

    function ProdutoService($q, $http){
        var data = [];

        function list(mission){
            var defer = $q.defer();
                        
            if(mission == 'c01')
            {
		       	 $http.get('app/data/produtosC01.json').then(function (data){
		             defer.resolve(data.data.data);
		             console.log(data.data);
		         });
            }
            else
            {
		       	 $http.get	('app/data/produtosC00.json').then(function (data){
		             defer.resolve(data.data.data);
		             console.log(data.data);
		         });
            }

           // defer.resolve(data);
            return defer.promise;
        }

        return {
            list: list
        };

    }
})();