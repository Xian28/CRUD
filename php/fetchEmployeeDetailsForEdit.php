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
			$object['userName'] = $row['userName'];
			$object['password'] = $row['password'];
			$object['firstName'] = $row['firstName'];
			$object['middleName'] = $row['middleName'];
			$object['lastName'] = $row['lastName'];
			$BirthDate = date("Y-m-d", strtotime($row['birthday']));
			$object['birthday'] = $BirthDate;
			$object['gender'] = $row['gender'];
			$object['street'] = $row['street'];
			$object['barangay'] = $row['barangay'];
			$object['city'] = $row['city'];
			$object['province'] = $row['province'];
			$object['contactNumber'] = $row['contactNumber'];
			$object['email'] = $row['email'];
			$object['department'] = $row['department'];
			$object['sss'] = $row['sss'];
			$object['tin'] = $row['tin'];
			$object['philhealth'] = $row['philhealth'];
			$object['role'] = $row['role'];
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