(function (){

    angular.module('MiniMercado.Produtos')
        .service('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['$q','$http'];

    function ProdutoService($q, $http){
        var data = [];

        function list(){
            var defer = $q.defer();
            var mission = GetParameterValues('mission');
            
            if(mission == 'c00')
            {
		       	 $http.get('app/data/produtosC00.json').then(function (data){
		             defer.resolve(data.data.data);
		             console.log(data.data);
		         });
            }
            
            if(mission == 'c01')
            {
		       	 $http.get('app/data/produtosC01.json').then(function (data){
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