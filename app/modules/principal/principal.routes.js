(function () {

    angular
        .module('MiniMercado.Principal')
        .config(principalRoutes);

    principalRoutes.$inject = ['$stateProvider'];

    function principalRoutes($stateProvider) {
        $stateProvider
            .state('app', {
                url: '',
                controller: 'PrincipalController',
                templateUrl: 'app/modules/principal/view/index.html'
            });
    }
    
})();