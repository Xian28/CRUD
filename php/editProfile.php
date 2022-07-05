<?php
	//session_start();
	include "db.php";
	if($_GET['userID'] == "")
	{
		$userID =  $_SESSION['userID'];
	}
	else
	{
		$userID =  $_GET['userID'];
	}
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
	$sql = "update users set userName = '" . $profileusername . "',password = '" . $profilepassword . "',firstName = '" . $profilefirstname ."'
	,middleName = '" . $profilemiddlename . "',lastName = '" . $profilelastname . "',birthday = '" . $profilebirthday . "',gender = '" .$profilegender . "'
	,street = '" . $profilestreet . "',barangay = '" . $profilebarangay . "',city = '" . $profilecity . "',province = '" . $profileprovince . "'
	,contactNumber = '" . $profilecontactNumber . "',email = '" . $profileemail . "',department = '" . $profiledepartment . "',sss = '" . $profilesss . "'
	,tin = '" . $profiletin . "',philhealth = '" . $profilephilhealth . "',role = '" . $profileRole . "'
	where userID = '" . $userID . "'";
	if($conn->query($sql) === TRUE)
	{
		$object['success'] = 1;
		$birthday = date("M jS, Y", strtotime($profilebirthday));
		$birthdayForProfile = date("Y-m-d", strtotime($profilebirthday));
		$_SESSION['userName'] = $profileusername;
		$_SESSION['password'] = $profilepassword;
		$_SESSION['firstName'] = $profilefirstname;
		$_SESSION['middleName'] = $profilemiddlename;
		$_SESSION['lastName'] = $profilelastname;
		$_SESSION['gender'] = $profilegender;
		$_SESSION['street'] = $profilestreet;
		$_SESSION['barangay'] = $profilebarangay;
		$_SESSION['city'] = $profilecity;
		$_SESSION['province'] = $profileprovince;
		$_SESSION['contactNumber'] = $profilecontactNumber;
		$_SESSION['email'] = $profileemail;
		$_SESSION['department'] = $profiledepartment;
		$_SESSION['sss'] = $profilesss;
		$_SESSION['tin'] = $profiletin;
		$_SESSION['philhealth'] = $profilephilhealth;
		$_SESSION['role'] = $profileRole;
		$_SESSION['birthday'] = $birthday;
		$_SESSION['birthdayForProfile'] = $birthdayForProfile;
	}
	else
	{
		$object['success'] = 0;
	}
	$JSON = json_encode($object);
	echo $JSON;
?>