<?php
	session_start();
	$object = array();
	if(isset($_SESSION['userID']))
	{
		$object['name'] = $_SESSION['firstName'] . " " . substr($_SESSION['middleName'],0,1) . ". " .  $_SESSION['lastName'];
		$object['userID'] = $_SESSION['userID'];
		$object['userName'] = $_SESSION['userName'];
		$object['password'] = $_SESSION['password'];
		$object['userID'] = $_SESSION['userID'];
		$object['firstName'] = $_SESSION['firstName'];
		$object['middleName'] = $_SESSION['middleName'];
		$object['lastName'] = $_SESSION['lastName'];
		$object['gender'] = $_SESSION['gender'];
		$object['street'] = $_SESSION['street'];
		$object['barangay'] = $_SESSION['barangay'];
		$object['city'] = $_SESSION['city'];
		$object['province'] = $_SESSION['province'];
		$object['contactNumber'] = $_SESSION['contactNumber'];
		$object['email'] = $_SESSION['email'];
		$object['department'] = $_SESSION['department'];
		$object['sss'] = $_SESSION['sss'];
		$object['tin'] = $_SESSION['tin'];
		$object['philhealth'] = $_SESSION['philhealth'];
		$object['role'] = $_SESSION['role'];
		$object['status'] = $_SESSION['status'];
		$object['birthday'] = $_SESSION['birthday'];
		$object['birthdayForProfile'] = $_SESSION['birthdayForProfile'];
		$object['loginStatus'] = 1;
	}
	else
	{
		$object['loginStatus'] = 0;
	}
	$JSON = json_encode($object);
	echo $JSON;
?>