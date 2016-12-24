<?php

// Include confi.php
include_once('config.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	// Get data
	$name = isset($_POST['name']) ? mysql_real_escape_string($_POST['name']) : "";
	$email = isset($_POST['email']) ? mysql_real_escape_string($_POST['email']) : "";
	$password = isset($_POST['pwd']) ? mysql_real_escape_string($_POST['pwd']) : "";

	// Insert data into data base
	$sql = "INSERT INTO `minimercado`.`usuario` (`email`, `password`, `last`, `name`, `status`) VALUES ('$email', '$password', NOW(), time())', '$name', 1);";
	$qur = mysql_query($sql);
	if($qur){
		$json = array("status" => 1, "msg" => "Done User added!");
	}else{
		$json = array("status" => 0, "msg" => "Error adding user!");
	}
}else{
	$json = array("status" => 0, "msg" => "Request method not accepted");
}

@mysql_close($conn);

/* Output header */
header('Content-type: application/json');
echo json_encode($json);