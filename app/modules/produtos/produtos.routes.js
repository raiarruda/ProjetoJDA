(function () {

    angular
        .module('MiniMercado.Produtos')
        .config(principalRoutes);

    principalRoutes.$inject = ['$stateProvider'];

    function principalRoutes($stateProvider) {
        $stateProvider
            .state('app.produtos', {
                abstract: true,
                url: '/produtos',
                templateUrl: 'app/modules/produtos/view/template.html'
            })
            .state('app.produtos.list', {
                url: '/',
                controller: 'ProdutosListController',
                templateUrl: 'app/modules/produtos/view/index.html'
            })
            .state('app.produtos.carrinho',{
            	url:'/carrinho',
            	controller:'ProdutosCarrinhoController',
            	templateUrl:'app/modules/produtos/view/carrinho.html'
            })
            ;
        // .state('app.dashboard', {s
        //     url: '/dashboard',
        //     title: 'Dashboard',
        //     templateUrl: helper.basepath('dashboard.html'),
        //     resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
        // })

    }

})();