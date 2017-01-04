<?php
	// Include confi.php
	include_once('config.php');

	$email = isset($_GET['email']) ? mysql_real_escape_string($_GET['email']) :  "";
	$password = isset($_GET['password']) ? mysql_real_escape_string($_GET['password']) :  "";
	if(!empty($password) || !empty($email)){
		$qur = mysql_query("select name, email, status from `usuario` where email='$email' and password='$password'");
		$result =array();
		while($r = mysql_fetch_array($qur)){
			extract($r);
			$result[] = array("name" => $name, "email" => $email, 'status' => $status); 
		}
		if(!empty($result)) {
			$json = array("status" => 1, "info" => $result);
		}else{
			$json = array("status" => 0, "msg" => "User not found");
		}
	}else{
		$json = array("status" => 0, "msg" => "Empty fields");
	}
	@mysql_close($conn);

	/* Output header */
	header('Content-type: application/json');
	echo json_encode($json);
