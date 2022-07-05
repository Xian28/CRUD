<?php
	//session_start();
	include "db.php";
	$loginUsername = $_GET['loginUsername'];
	$loginPassword = $_GET['loginPassword'];
	$object = array();
	$sql = "SELECT * FROM users where userName = '" . $loginUsername . "' and password = '" . $loginPassword . "'";
	$result = $conn->query($sql);
	if($result->num_rows > 0)
	{
		$row = $result->fetch_assoc();
		if($row['status'] == 2)
		{
			$object['success'] = 2;
		}
		else
		{
			$object['success'] = 1;
			$birthday = date("M jS, Y", strtotime($row['birthday']));
			$birthdayForProfile = date("Y-m-d", strtotime($row['birthday']));
			$_SESSION['userID'] = $row['userID'];
			$_SESSION['userName'] = $row['userName'];
			$_SESSION['password'] = $row['password'];
			$_SESSION['userID'] = $row['userID'];
			$_SESSION['firstName'] = $row['firstName'];
			$_SESSION['middleName'] = $row['middleName'];
			$_SESSION['lastName'] = $row['lastName'];
			$_SESSION['gender'] = $row['gender'];
			$_SESSION['street'] = $row['street'];
			$_SESSION['barangay'] = $row['barangay'];
			$_SESSION['city'] = $row['city'];
			$_SESSION['province'] = $row['province'];
			$_SESSION['contactNumber'] = $row['contactNumber'];
			$_SESSION['email'] = $row['email'];
			$_SESSION['department'] = $row['department'];
			$_SESSION['sss'] = $row['sss'];
			$_SESSION['tin'] = $row['tin'];
			$_SESSION['philhealth'] = $row['philhealth'];
			$_SESSION['role'] = $row['role'];
			$_SESSION['status'] = $row['status'];
			$_SESSION['birthday'] = $birthday;
			$_SESSION['birthdayForProfile'] = $birthdayForProfile;
		}
	}
	else
	{
		$object['success'] = 0;
	}
	$JSON = json_encode($object);
	echo $JSON;
?>