angular.module("minimercado").controller("usuariosController", function($scope) {
	
	$scope.usuarios=[];
	/*var vm = this;
	vm.usuario = {};
	
	vm.salvar=salvar;
	
	function salvar(dados){
		
		console.log('salvou');
		console.log(JSON.stringify(dados,null,2));
		
		vm.usuario={};
		
		$scope.customerForm.$setPristine();//mudar esse customer form
	};
	
	*/$scope.adicionaUsuario = function(nomeUsuario, loginUsuario, senhaUsuario) {
		$scope.usuario = {
			nomeUsuario : $scope.nomeUsuario,
			loginUsuario : $scope.loginUsuario,
			senhaUsuario : $scope.senhaUsuario
		};

		$scope.usuarios.push($scope.usuario);
	}; 

});

