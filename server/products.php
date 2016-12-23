<?php
	// Include confi.php
	include_once('config.php');

	$categoria = isset($_GET['fk_categoria']) ? mysql_real_escape_string($_GET['fk_categoria']) :  "";
	$id = isset($_GET['id']) ? mysql_real_escape_string($_GET['id']) :  "";
	
	if(empty($categoria) || empty($id)){
		mysql_set_charset('utf8');
		$qur = mysql_query("select `produto`.id, `categoria`.nome as categoria_nome, `produto`.nome,`produto`.imagem, `produto`.descricao, `produto`.valor from `produto` inner join `categoria` on `produto`.fk_categoria = `categoria`.id");
		$result =array();
		while($r = mysql_fetch_array($qur)){
			extract($r);
			$result[] = array("id" => $id_produto, "categoria_nome" => $categoria, "nome" => $nome, "imagem" => $imagem, "descricao" => $descricao, "valor" => $valor); 
		}
		if(!empty($result)) {
			$json = array("status" => 1, "info" => $result);
		}else{
			$json = array("status" => 0, "msg" => "Produto not found");
		}
	}else{
		$json = array("status" => 0, "msg" => "Empty fields");
	}
	@mysql_close($conn);

	/* Output header */
	header('Content-type: application/json');
	echo json_encode($json);
