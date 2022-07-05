<?php
	session_start();
	$object = array();
	session_unset();
	if(!isset($_SESSION['userID']))
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