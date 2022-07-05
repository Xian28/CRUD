<?php
	//session_start();
	include "db.php";
	$profilefirstname = $_GET['profilefirstname'];
	$profilemiddlename = $_GET['profilemiddlename'];
	$profilelastname = $_GET['profilelastname'];
	$profilebirthday = $_GET['profilebirthday'];
	$profilegender = $_GET['profilegender'];
	$profilestreet = $_GET['profilestreet'];
	$profilebarangay = $_GET['profilebarangay'];
	$profilecity = $_GET['profilecity'];
	$profileprovince = $_GET['profileprovince'];
	$profilecontactNumber = $_GET['profilecontactNumber'];
	$profileemail = $_GET['profileemail'];
	$profiledepartment = $_GET['profiledepartment'];
	$profilesss = $_GET['profilesss'];
	$profiletin = $_GET['profiletin'];
	$profilephilhealth = $_GET['profilephilhealth'];
	$profileusername = $_GET['profileusername'];
	$profilepassword = $_GET['profilepassword'];
	$profileRole = $_GET['profileRole'];
	$object = array();
	$sql = "select * from users where userName = '" . $profileusername . "'";
	$result = $conn->query($sql);
	if($result->num_rows > 0)
	{
		$object['success'] = 2;
	}
	else
	{
		$sql = "insert into users(userName,password,firstName,middleName,lastName,birthday,gender,street,barangay,city,province,
		contactNumber,email,department,sss,tin,philhealth,role) value('" . $profileusername . "','" . $profilepassword . "',
		'" . $profilefirstname . "','" . $profilemiddlename . "','" . $profilelastname . "','" . $profilebirthday . "','" . $profilegender . "',
		'" . $profilestreet . "','" . $profilebarangay . "','" . $profilecity . "','" . $profileprovince . "','" . $profilecontactNumber . "','" . $profileemail . "',
		'" . $profiledepartment . "','" . $profilesss . "','" . $profiletin . "','" . $profilephilhealth . "','" . $profileRole . "')";
		if($conn->query($sql) === TRUE)
		{
			$object['success'] = 1;
		}
		else
		{
			$object['success'] = 0;
		}
	}
	$JSON = json_encode($object);
	echo $JSON;
?>