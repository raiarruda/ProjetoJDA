(function () {

    angular.module('MiniMercado.Produtos')
        .service('CarrinhoService', CarrinhoService);

    CarrinhoService.$inject = ['$q'];

    function CarrinhoService($q) {

        var compra  = {
            itens: {}
        };

        function adicionarProduto(produto){
        	
            if(!compra.itens[produto.id]){            	
                compra.itens[produto.id]=produto;
				compra.itens[produto.id].qtd = 1;
            } else {
                compra.itens[produto.id].qtd++;
            }
            console.log(compra.itens);
        }

        function removerProduto(produto){
        	if(compra.itens[produto.id] && compra.itens[produto.id].qtd >1){
                compra.itens[produto.id].qtd--;
            } 
            else if(compra.itens[produto.id]){
            	compra.itens[produto.id].qtd=0;
            	delete compra.itens[produto.id];
            	alert("Você já removeu todos os produtos "+ produto.nome +" do carrinho");
            	
            }
            
        }

        function getItensNoCarrinho(){
            return compra.itens;
        }
        

		  function getTotalItensNoCarrinho(){
        	var total=0;
        	
        	for(var key in compra.itens){
        		if(!compra.itens.hasOwnProperty(key)) continue;
        		        		
        		total+=compra.itens[key].qtd;
        	}
        	
        	return total;
        }
                
      
        function getValorTotal(){
        	var total=0;
        	
        	for(var key in compra.itens){
        		if(!compra.itens.hasOwnProperty(key)) continue;
        		        		
        		total+=compra.itens[key].qtd *compra.itens[key].valor ;
        	}
        	
        	return total;
        	
        }
        
        
        
        return {
            getItensNoCarrinho: getItensNoCarrinho,
            adicionarProduto: adicionarProduto,
            getItensNoCarrinho:getItensNoCarrinho,
            getValorTotal:getValorTotal,
            getTotalItensNoCarrinho: getTotalItensNoCarrinho,
            removerProduto: removerProduto
        };

    }

})();