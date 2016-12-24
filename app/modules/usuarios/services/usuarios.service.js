(function (){

    angular.module('MiniMercado.Usuarios')
        .service('UsuarioService', UsuarioService);

    UsuarioService.$inject = ['$q'];

    function UsuarioService($q){


        var data = [];

     
        function list(){
            var defer = $q.defer();
            defer.resolve(data);
            return defer.promise;
        }

        return {
            list: list
        };

    }

})();