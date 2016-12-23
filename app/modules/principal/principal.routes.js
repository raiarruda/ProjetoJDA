(function () {

    angular
        .module('MiniMercado.Principal')
        .config(principalRoutes);

    principalRoutes.$inject = ['$stateProvider'];

    function principalRoutes($stateProvider) {
        $stateProvider
            .state('app', {
                url: '',
                templateUrl: 'app/modules/principal/view/index.html'
            });
    }
    
})();