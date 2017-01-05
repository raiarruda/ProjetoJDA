(function () {
    angular.module('MiniMercado',
        [
            'ui.router',
    		'ngCookies',
            'MiniMercado.Principal',
            'MiniMercado.Produtos',
            'MiniMercado.Usuarios'
        ]);
})();
