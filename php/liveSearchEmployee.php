<?php
	include "db.php";
	$object = array();
	$searchValue = preg_replace('/\s+/', '', $_GET['searchValue']);
	$html = "";
	$sql = "SELECT * FROM users where userID != 1 and 
	(REPLACE(CONCAT(firstName,middleName,lastName), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(firstName,lastName), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(firstName,lastName,middleName), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(lastName,firstName,middleName), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(lastName,middleName,firstName), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(firstName,middleName,lastName), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(street,barangay,city,province), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(province,barangay,city), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(province,city), ' ', '') like '%" . $searchValue . "%'
	or REPLACE(CONCAT(barangay,province), ' ', '') like '%" . $searchValue . "%'
	or contactNumber like '%" . $searchValue . "%' or email like '%" . $searchValue . "%'
	or sss like '%" . $searchValue . "%' or tin like '%" . $searchValue . "%' or philhealth like '%" . $searchValue . "%'
	or role like '%" . $searchValue . "%')
	order by lastName ASC,firstName ASC,middleName ASC,userID ASC";
	$result = $conn->query($sql);
	if($result->num_rows > 0)
	{
		$html = 
		"<table>
			<tr>
				<th>Name</th>
				<th>Birthday</th>
				<th>Gender</th>
				<th>Address</th>
				<th>Contact Number</th>
				<th>Email</th>
				<th>Department</th>
				<th>Gov't ID's</th>
				<th>User Role</th>
				<th>Status</th>
				<th width='50px'>Action</th>
			</tr>";
		while($row = $result->fetch_assoc())
		{	
			if($row['gender'] == 1)
			{
				$gender = "Male";
			}
			elseif($row['gender'] == 2)
			{
				$gender = "Female";
			}
			$BirthDate = date("M jS, Y", strtotime($row['birthday']));
			//department
			if($row['department'] == 1)
			{
				$department = "ITSM";
			}
			else if($row['department'] == 2)
			{
				$department = "RSTL";
			}
			else if($row['department'] == 3)
			{
				$department = "FAS";
			}
			else if($row['department'] == 4)
			{
				$department = "ORD";
			}
			else if($row['department'] == 5)
			{
				$department = "COA";
			}
			else
			{
				$department = "Error";
			}
			//role
			if($row['role'] == 1)
			{
				$role = "Administrator";
			}
			else if($row['role'] == 2)
			{
				$role = "User";
			}
			//status
			if($row['status'] == 1)
			{
				$status = "Active";
			}
			else if($row['status'] == 2)
			{
				$status = "Inactive";
			}
			$html .= 
			"<tr id='column" . $row['userID'] . "'>
				<td>"
					. $row['lastName'] . ", " . $row['firstName'] . " " . $row['middleName'] .
				"</td>
				<td>"
					. $BirthDate .
				"</td>
				<td>"
					. $gender .
				"</td>
				<td>"
					. $row['street'] . ", " . $row['barangay'] . ", " . $row['city'] . ", " . $row['province'] .
				"</td>
				<td>"
					. $row['contactNumber'] .
				"</td>
				<td>"
					. $row['email'] .
				"</td>
				<td>"
					. $department .
				"</td>
				<td>
					SSS: " . $row['sss'] . "<br/>TIN: " . $row['tin'] . "<br/>PhilHealth: " . $row['philhealth'] . 
				"</td>
				<td>"
					. $role .
				"</td>
				<td>"
					. $status .
				"</td>";
				$html .= 
				"<td style='text-align:center;'>
					<svg id='trainingActionButton" . $row['userID'] . "' class='action_button' onclick='showActionMenu(\"" . $row['userID'] . "\")' cursor='pointer'; height='30px' version='1.1' id='Icons' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' xml:space='preserve'>
						<g>
							<path d='M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z'/>
							<path d='M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z'/>
							<path d='M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z'/>
						</g>
					</svg>
				</td>
			</tr>";
		}
		$html .= "</table>";
	}
	else
	{
		$html = "<center><i>No Registered Trainee/s yet</i></center>";
	}
	$object['html'] = $html;
	$JSON = json_encode($object);
	echo $JSON;
?>