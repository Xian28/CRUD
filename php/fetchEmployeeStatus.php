<?php
	include "db.php";
	$object = array();
	$userID = $_GET['userID'];
	$sql = "SELECT * FROM users where userID = '" . $userID . "'";
	$result = $conn->query($sql);
	if($result->num_rows > 0)
	{
		$row = $result->fetch_assoc();
		{	
			$object['status'] = $row['status'];
			$object['success'] = "1";
		}
	}
	else
	{
		$object['success'] = "0";
	}
	$JSON = json_encode($object);
	echo $JSON;
?>