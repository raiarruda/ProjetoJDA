(function (){

    angular.module('MiniMercado.Usuarios')
        .controller('UsuariosAddController',UsuariosAddController);

    UsuariosAddController.$inject = ['$scope', 'UsuarioService'];

    function UsuariosAddController($scope, UsuarioService){


        $scope.usuarios = [];

        $scope.cadastrarUsuario = function(isValid){
      
            isValid = $scope.casdatroForm.$valid;
            if ($scope.casdatroForm.$valid) {
             
                adicionaUsuario($scope.cadastroForm.nomeUsuario, $scope.cadastroForm.loginUsuario, $scope.cadastroForm.senhaUsuario); //adiciona(usuario)?

            }
        };

        $scope.adicionaUsuario = function(nomeUsuario, loginUsuario, senhaUsuario) {
            $scope.usuario = {
                nomeUsuario : $scope.nomeUsuario,
                loginUsuario : $scope.loginUsuario,
                senhaUsuario : $scope.senhaUsuario
            };

            $scope.usuarios.push($scope.usuario);
            alert('cadastro realizado');
        };

    }
})();