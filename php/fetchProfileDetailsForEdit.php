<?php
	session_start();
	include "db.php";
	$object = array();
	$sql = "SELECT * FROM users where userID = '" . $_SESSION['userID'] . "'";
	$result = $conn->query($sql);
	if($result->num_rows > 0)
	{
		$row = $result->fetch_assoc();
		$object['trainingTitle'] = $row['trainingTitleId'];
		$object['trainingType'] = $row['trainingType'];
		$object['trainingTime'] = $row['trainingTime'];
		$object['trainingStartDate'] = $trainingStartDate;
		$object['trainingEndDate'] = $trainingEndDate;
		$object['trainingVenue'] = $row['trainingVenue'];
		$object['trainingHours'] = $row['trainingHours'];
		$object['programManager'] = $row['programManager'];
		$object['success'] = "1";
	}
	else
	{
		$object['success'] = "0";
	}
	$JSON = json_encode($object);
	echo $JSON;
?>