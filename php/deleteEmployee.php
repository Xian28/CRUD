<?php
	include "db.php";
	$userID = $_GET['userID'];
	$object = array();
	$sql = "delete from users where userID = '" . $userID . "'";
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