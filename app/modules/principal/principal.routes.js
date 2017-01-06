(function () {

    angular
        .module('MiniMercado.Principal')
        .config(principalRoutes);

    principalRoutes.$inject = ['$stateProvider'];

    function principalRoutes($stateProvider) {
        $stateProvider
         .state('app', {
                abstract: true,
                url: '',
                controller: 'PrincipalController',
                templateUrl: 'app/modules/principal/view/index.html'
            })
            .state('app.teste', {
                url: '',
               
                templateUrl: 'app/modules/principal/view/template.html'
            });
    }
    
})();