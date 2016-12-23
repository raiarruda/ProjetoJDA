(function () {

    angular
        .module('MiniMercado.Usuarios')
        .config(principalRoutes);

    principalRoutes.$inject = ['$stateProvider'];

    function principalRoutes($stateProvider) {
        $stateProvider
            .state('auth.login', {
                url: '/usuario',
                abstract: true,
                //   controller: 'UsuariosAddController',
                template: '<div ui-view></div>'
            })

            .state('auth.registro', {
                url: '/',
             //   controller: 'UsuariosAddController',
                templateUrl: 'app/modules/usuarios/view/login.html'
            })
            .state('app.usuario.cadastrar', {
                url: '/cadastro',
                controller: 'UsuariosAddController',
                templateUrl: 'app/modules/usuarios/view/cadastrar.html'
            });
 

    }

})();