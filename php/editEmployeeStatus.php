<?php
	include "db.php";
	$userID = $_GET['userID'];
	$status = $_GET['status'];
	$object = array();
	$sql = "update users set status = '" . $status . "' where userID = '" . $userID . "'";
	if($conn->query($sql) === TRUE)
	{
		$object['success'] = 1;
	}
	else
	{
		$object['success'] = 0;
	}
	$JSON = json_encode($object);
	echo $JSON;
?>