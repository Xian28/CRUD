//XMLREQUEST
function XMLrequest()
{
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhttp=new XMLHttpRequest();
	} 
	else
	{  
		// code for IE6, IE5
		xhttp=new ActiveXObject('Microsoft.XMLHTTP');
	}
}
//getCurrentYear
function getCurrentYear()
{
	var n = new Date();
	var y = n.getFullYear();
	return y;
}
//getCurrentyearForFooterOnIndex
if(document.body.contains(document.getElementById('loginFooter')))
{
	var loginFooter = document.getElementById('loginFooter');
	loginFooter.innerHTML = "All Rights Reserved &copy; " + getCurrentYear();
}
//get_current_date
function getCurrentDate()
{
	var n = new Date();
	var d = n.getDate();
	if(d < 10)
	{
		d = "0" + d;
	}
	var m = n.getMonth() + 1;
	if(m < 10)
	{
		m = "0" + m;
	}
	var y = n.getFullYear();
	return y + "-" + m + "-" + d;
}
//textInputFocus
function textInputFocus(inputID)
{
	var input = document.getElementById(inputID);
	input.style.borderBottom = "solid 2px var(--base)";
}
//textInputBlur
function textInputBlur(inputID)
{
	var input = document.getElementById(inputID);
	input.style.borderBottom = "solid 2px var(--negativeColor2)";
}
//checkSession
function checkSession(currentPage)
{
	showMainLoadingScreen();
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.loginStatus == 1)
			{
				hideMainLoadingScreen();
				if(currentPage == 'index')
				{
					window.location.href = "home.html";
				}
				else
				{
					if(myJSON.role != '1')
					{
						var employeeSideNav = document.getElementById('employeeSideNav').style.display = "none";
					}
					var profileAvatar = document.getElementById('profileAvatar');
					profileAvatar.innerHTML = Array.from(myJSON.name)[0];
					var profileMenuName = document.getElementById('profileMenuName');
					profileMenuName.innerHTML = myJSON.name;
					var profileMenuRole = document.getElementById('profileMenuRole');
					if(myJSON.role == 1)
					{
						var role = "Administrator";
					}
					else
					{
						var role = "User";
					}
					profileMenuRole.innerHTML = role;
					if(currentPage == 'myprofile')
					{
						document.getElementById('firstName').innerHTML = "First Name: " + myJSON.firstName;
						document.getElementById('middleName').innerHTML = "Middle Name: " + myJSON.middleName;
						document.getElementById('lastName').innerHTML = "Last Name: " + myJSON.lastName;
						document.getElementById('birthday').innerHTML = "Birthdate: " + myJSON.birthday;
						if(myJSON.gender == 1)
						{
							var gender = "Male";
						}
						else
						{
							var gender = "Female";
						}
						document.getElementById('gender').innerHTML = "Gender: " + gender;
						document.getElementById('street').innerHTML = "Street: " + myJSON.street;
						document.getElementById('barangay').innerHTML = "Barangay: " + myJSON.barangay;
						document.getElementById('city').innerHTML = "City: " + myJSON.city;
						document.getElementById('province').innerHTML = "Province: " + myJSON.province;
						document.getElementById('contactNumber').innerHTML = "Contact Number: " + myJSON.contactNumber;
						document.getElementById('email').innerHTML = "Email: " + myJSON.email;
						if(myJSON.department == '1')
						{
							var dept = "ITSM";
						}
						else if(myJSON.department == '2')
						{
							var dept = "RSTL";
						}
						else if(myJSON.department == '3')
						{
							var dept = "FAS";
						}
						else if(myJSON.department == '4')
						{
							var dept = "ORD";
						}
						else if(myJSON.department == '5')
						{
							var dept = "COA";
						}
						document.getElementById('department').innerHTML = "Department: " + dept;
						document.getElementById('sss').innerHTML = "SSS: " + myJSON.sss;
						document.getElementById('tin').innerHTML = "TIN: " + myJSON.tin;
						document.getElementById('philhealth').innerHTML = "PhilHealth: " + myJSON.philhealth;
						document.getElementById('Username').innerHTML = "Username: " + myJSON.userName;
						if(myJSON.role == 1)
						{
							var role = "Administrator";
						}
						else if(myJSON.role == 2)
						{
							var role = "User";
						}
						document.getElementById('role').innerHTML = "Role: " + role;
					}
					//auto log out
					var idle;
					window.onmousemove = function ()
					{
						clearTimeout(idle);
						idle = setTimeout(function()
						{
							alert('You have no activity in 30 minutes. The system will automatically logged out');
							logout();
						//1000 = 1 second. change the value to check functionality
						},300000);
					}
					window.onmousedown = function ()
					{
						clearTimeout(idle);
						idle = setTimeout(function()
						{
							alert('You have no activity in 30 minutes. The system will automatically logged out');
							logout();
						//1000 = 1 second. change the value to check functionality
						},300000);
					}
					window.onkeypress = function ()
					{
						clearTimeout(idle);
						idle = setTimeout(function()
						{
							alert('You have no activity in 30 minutes. The system will automatically logged out');
							logout();
						//1000 = 1 second. change the value to check functionality
						},2);
					}
				}
			}
			else
			{
				if(currentPage == 'index')
				{
					hideMainLoadingScreen();
				}
				else
				{
					window.location.href = "/epm";
					hideMainLoadingScreen();
				}
			}
		}
	};
	xhttp.open("GET","php/checkSession.php",true);
	xhttp.send();
}
//showModalForProfile
function showModalForProfile()
{
	var profileMenusPopUp = document.getElementById('profileMenusPopUp');
	var profileAvatar = document.getElementById('profileAvatar');
	var bottomPosition = parseInt(profileAvatar.getBoundingClientRect().bottom);
	var leftPosition = parseInt(profileAvatar.getBoundingClientRect().left);
	var height = parseInt(profileAvatar.getBoundingClientRect().height);
	var buttonWidth = parseInt(profileAvatar.getBoundingClientRect().width);
	var profileMenusPopUp = document.getElementById('profileMenusPopUp');
	profileMenusPopUp.style.display = "block";
	var popUpWidth = parseInt(profileMenusPopUp.getBoundingClientRect().width);
	var popUpHeight = parseInt(profileMenusPopUp.getBoundingClientRect().height);
	var newTop = (bottomPosition - height/2);
	profileMenusPopUp.style.top = newTop + "px";
	profileMenusPopUp.style.left = ((leftPosition - popUpWidth + buttonWidth/2) - 15) + "px";
	profileMenusPopUp.style.display = "block";
}
//hideProfileMenu
function hideProfileMenu()
{
	var profileMenusPopUp = document.getElementById('profileMenusPopUp');
	profileMenusPopUp.style.display = "none";
}
//showModalForLogout
function showModalForLogout()
{
	var profileMenusPopUp = document.getElementById('profileMenusPopUp');
	profileMenusPopUp.style.display = "none";
	var logoutPopUpContainer = document.getElementById('logoutPopUpContainer');
	logoutPopUpContainer.style.display = "block";
}
//logout
function logout()
{
	showMainLoadingScreen();
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.success == 0)
			{
				alert('Something went wrong while logging out.');
			}
			else if(myJSON.success == 1)
			{
				alert("Logging out...");
				window.location.href = "/epm";
			}
			hideMainLoadingScreen();
		}
	};
	xhttp.open("GET","php/logout.php",true);
	xhttp.send();
}
//hidepopup
function hidePopUp(popUpId)
{
	document.getElementById(popUpId).style.display = "none";
}
//showMainLoadingScreen
function showMainLoadingScreen()
{
	var mainLoadingScreenPopUpContainer = document.getElementById('mainLoadingScreenPopUpContainer');
	mainLoadingScreenPopUpContainer.style.display = "block";
}
//hideMainLoadingScreen
function hideMainLoadingScreen()
{
	var mainLoadingScreenPopUpContainer = document.getElementById('mainLoadingScreenPopUpContainer');
	mainLoadingScreenPopUpContainer.style.display = "none";
}
//loginClicked
function loginClicked()
{
	showMainLoadingScreen();
	var loginUsername = document.getElementById('username');
	var loginPassword = document.getElementById('password');
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.success == 0)
			{
				alert('Sorry, the username and password do not matched. Please try again.');
				loginUsername.value = "";
				loginPassword.value = "";
			}
			else if(myJSON.success == 1)
			{
					window.location.href = "home.html";
			}
			else if(myJSON.success == 2)
			{
				alert('Sorry,you have been restricted from using the system.');
			}
			else
			{
				alert('Something went wrong while logging in.');
			}
			hideMainLoadingScreen();
		}
	};
	xhttp.open("GET","php/checkLoginDetails.php?loginUsername="+loginUsername.value+'&loginPassword='+loginPassword.value,true);
	xhttp.send();
}
//showModalForEditProfile
function showModalForEditProfile()
{
	showMainLoadingScreen();
	//var actionMenusPopUp = document.getElementById('actionMenusPopUp');
	//actionMenusPopUp.style.display = "none";
	var profilePopUpContainer = document.getElementById('profilePopUpContainer');
	profilePopUpContainer.style.display = "block";
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.loginStatus == 0)
			{
				alert("Something went wrong while loading the profile's details.");
			}
			else if(myJSON.loginStatus == 1)
			{
				document.getElementById('profilefirstname').value = myJSON.firstName;
				document.getElementById('profilemiddlename').value = myJSON.middleName;
				document.getElementById('profilelastname').value = myJSON.lastName;
				document.getElementById('profilebirthday').value = myJSON.birthdayForProfile;
				document.getElementById('profilegender').value = myJSON.gender;
				document.getElementById('profilestreet').value = myJSON.street;
				document.getElementById('profilebarangay').value = myJSON.barangay;
				document.getElementById('profilecity').value = myJSON.city;
				document.getElementById('profileprovince').value = myJSON.province;
				document.getElementById('profilecontactNumber').value = myJSON.contactNumber;
				document.getElementById('profileemail').value = myJSON.email;
				document.getElementById('profiledepartment').value = myJSON.department;
				document.getElementById('profilesss').value = myJSON.sss;
				document.getElementById('profiletin').value = myJSON.tin;
				document.getElementById('profilephilhealth').value = myJSON.philhealth;
				document.getElementById('profileusername').value = myJSON.userName;
				document.getElementById('profilepassword').value = myJSON.password;
				document.getElementById('profileconfirmpassword').value = myJSON.password;
				document.getElementById('profileRole').value = myJSON.role;
			}
			hideMainLoadingScreen();
		}
	};
	xhttp.open("GET","php/checkSession.php",true);
	xhttp.send();
}
//editProfile
function editProfile(currentPage)
{
	showMainLoadingScreen();
	var profilefirstname = document.getElementById('profilefirstname').value;
	var profilemiddlename = document.getElementById('profilemiddlename').value;
	var profilelastname = document.getElementById('profilelastname').value;
	var profilebirthday = document.getElementById('profilebirthday').value;
	var profilegender = document.getElementById('profilegender').value;
	var profilestreet = document.getElementById('profilestreet').value;
	var profilebarangay = document.getElementById('profilebarangay').value;
	var profilecity = document.getElementById('profilecity').value;
	var profileprovince = document.getElementById('profileprovince').value;
	var profilecontactNumber = document.getElementById('profilecontactNumber').value;
	var profileemail = document.getElementById('profileemail').value;
	var profiledepartment = document.getElementById('profiledepartment').value;
	var profilesss = document.getElementById('profilesss').value;
	var profiletin = document.getElementById('profiletin').value;
	var profilephilhealth = document.getElementById('profilephilhealth').value;
	var profileusername = document.getElementById('profileusername').value;
	var profilepassword = document.getElementById('profilepassword').value;
	var profileconfirmpassword = document.getElementById('profileconfirmpassword').value;
	var profileRole = document.getElementById('profileRole').value;
	if(currentPage == 'employees')
	{
		var userID = document.getElementById('hiddenTrainingInput').value;
	}
	else
	{
		var userID = "";
	}
	if((!/\S/.test(profilefirstname)) || (!/\S/.test(profilemiddlename)) || (!/\S/.test(profilelastname)) || (!/\S/.test(profilestreet))
	||	(!/\S/.test(profilebarangay)) || (!/\S/.test(profilecity)) || (!/\S/.test(profileprovince)) || (!/\S/.test(profilecontactNumber)) 
	|| (!/\S/.test(profileemail)) || (!/\S/.test(profilesss)) || (!/\S/.test(profiletin)) || (!/\S/.test(profilephilhealth))
	|| (!/\S/.test(profileusername)) || (!/\S/.test(profilepassword)) || (!/\S/.test(profileconfirmpassword)))
	{
		alert('Please fill up all the fields');
		hideMainLoadingScreen();
	}
	else
	{	
		if(profilepassword != profileconfirmpassword)
		{
			alert('Passwords must be the same.');
			hideMainLoadingScreen();
		}
		else
		{
			XMLrequest();
			xhttp.onreadystatechange = function()
			{
				if (this.readyState == 4 && this.status == 200)
				{
					var myJSON = JSON.parse(this.responseText);
					if(myJSON.success == 0)
					{
						alert('Something went wrong while editing your profile.');
						hideMainLoadingScreen();
					}
					else if(myJSON.success == 1)
					{
						hidePopUp('profilePopUpContainer');
						alert('Profile successfully edited.');
						if(currentPage == 'myprofile')
						{
							checkSession('myprofile');
						}
						else if(currentPage == 'employees')
						{
							var inputToCheckSearch = document.getElementById('inputToCheckSearch').value;
							if(inputToCheckSearch == 1)
							{
								var profileBodySearchInput = document.getElementById('profileBodySearchInput').value;
								liveSearch(profileBodySearchInput,'employee');
							}
							else
							{
								showEmployees();
							}
						}
						
					}
					hideMainLoadingScreen();
				}
			};
			xhttp.open("GET","php/editProfile.php?profilefirstname="+profilefirstname+"&profilemiddlename="+profilemiddlename+
			"&profilelastname="+profilelastname+"&profilebirthday="+profilebirthday+"&profilegender="+profilegender+
			"&profilestreet="+profilestreet+"&profilebarangay="+profilebarangay+"&profilecity="+profilecity+
			"&profileprovince="+profileprovince+"&profilecontactNumber="+profilecontactNumber+
			"&profileemail="+profileemail+"&profiledepartment="+profiledepartment+"&profilesss="+profilesss+"&profiletin="+profiletin+
			"&profilephilhealth="+profilephilhealth+"&profileusername="+profileusername+"&profilepassword="+profilepassword+
			"&profileconfirmpassword="+profileconfirmpassword+"&profileRole="+profileRole+"&userID="+userID,true);
			xhttp.send();
		}
	}
}
//addProfile
function addProfile()
{
	showMainLoadingScreen();
	var profilefirstname = document.getElementById('profilefirstname').value;
	var profilemiddlename = document.getElementById('profilemiddlename').value;
	var profilelastname = document.getElementById('profilelastname').value;
	var profilebirthday = document.getElementById('profilebirthday').value;
	var profilegender = document.getElementById('profilegender').value;
	var profilestreet = document.getElementById('profilestreet').value;
	var profilebarangay = document.getElementById('profilebarangay').value;
	var profilecity = document.getElementById('profilecity').value;
	var profileprovince = document.getElementById('profileprovince').value;
	var profilecontactNumber = document.getElementById('profilecontactNumber').value;
	var profileemail = document.getElementById('profileemail').value;
	var profiledepartment = document.getElementById('profiledepartment').value;
	var profilesss = document.getElementById('profilesss').value;
	var profiletin = document.getElementById('profiletin').value;
	var profilephilhealth = document.getElementById('profilephilhealth').value;
	var profileusername = document.getElementById('profileusername').value;
	var profilepassword = document.getElementById('profilepassword').value;
	var profileconfirmpassword = document.getElementById('profileconfirmpassword').value;
	var profileRole = document.getElementById('profileRole').value;
	if((!/\S/.test(profilefirstname)) || (!/\S/.test(profilemiddlename)) || (!/\S/.test(profilelastname)) || (!/\S/.test(profilestreet))
	||	(!/\S/.test(profilebarangay)) || (!/\S/.test(profilecity)) || (!/\S/.test(profileprovince)) || (!/\S/.test(profilecontactNumber)) 
	|| (!/\S/.test(profileemail)) || (!/\S/.test(profilesss)) || (!/\S/.test(profiletin)) || (!/\S/.test(profilephilhealth))
	|| (!/\S/.test(profileusername)) || (!/\S/.test(profilepassword)) || (!/\S/.test(profileconfirmpassword)))
	{
		alert('Please fill up all the fields');
		hideMainLoadingScreen();
	}
	else
	{	
		if(profilepassword != profileconfirmpassword)
		{
			alert('Passwords must be the same.');
			hideMainLoadingScreen();
		}
		else
		{
			XMLrequest();
			xhttp.onreadystatechange = function()
			{
				if (this.readyState == 4 && this.status == 200)
				{
					var myJSON = JSON.parse(this.responseText);
					if(myJSON.success == 0)
					{
						alert('Something went wrong while adding the employee.');
						hideMainLoadingScreen();
					}
					else if(myJSON.success == 1)
					{
						hidePopUp('profilePopUpContainer');
						alert('Profile successfully added.');
						showEmployees();
					}
					else if(myJSON.success == 2)
					{
						alert('Username is already existing.');
						showEmployees();
					}
					hideMainLoadingScreen();
				}
			};
			xhttp.open("GET","php/addProfile.php?profilefirstname="+profilefirstname+"&profilemiddlename="+profilemiddlename+
			"&profilelastname="+profilelastname+"&profilebirthday="+profilebirthday+"&profilegender="+profilegender+
			"&profilestreet="+profilestreet+"&profilebarangay="+profilebarangay+"&profilecity="+profilecity+
			"&profileprovince="+profileprovince+"&profilecontactNumber="+profilecontactNumber+
			"&profileemail="+profileemail+"&profiledepartment="+profiledepartment+"&profilesss="+profilesss+"&profiletin="+profiletin+
			"&profilephilhealth="+profilephilhealth+"&profileusername="+profileusername+"&profilepassword="+profilepassword+
			"&profileconfirmpassword="+profileconfirmpassword+"&profileRole="+profileRole,true);
			xhttp.send();
		}
	}
}
//showEmployees
function showEmployees()
{
	
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			var employeeMainBodyContent = document.getElementById('employeeMainBodyContent');
			employeeMainBodyContent.innerHTML = myJSON.html;
		}
	};
	xhttp.open("GET","php/fetchEmployees.php",true);
	xhttp.send();
}
//showpopup
function showPopUp(popUpId)
{
	if(popUpId == 'profilePopUpContainer')
	{
		document.getElementById('popUpHeaderCaption').innerHTML = "ADD NEW EMPLOYEE";
		document.getElementById('profilebirthday').value = getCurrentDate();
	}
	document.getElementById(popUpId).style.display = "flex";
	document.getElementById('addButton').style.display = "flex";
	document.getElementById('editButton').style.display = "none";
	//document.getElementById('actionMenusPopUp').style.display = "none";
	
}
//showActionMenu
function showActionMenu(trainingID)
{
	var hiddenTrainingInput = document.getElementById('hiddenTrainingInput');
	hiddenTrainingInput.value = trainingID;
	var trainingActionButton = "trainingActionButton" + trainingID;
	var activeActionButton = document.getElementById(trainingActionButton);
	var action_button = document.getElementsByClassName('action_button');
	for(var i = 0; i < action_button.length; i++)
	{
		action_button[i].style.border = "";
	}
	activeActionButton.style.border = "solid 2px var(--base)";
	var bottomPosition = parseInt(activeActionButton.getBoundingClientRect().bottom);
	var leftPosition = parseInt(activeActionButton.getBoundingClientRect().left);
	var height = parseInt(activeActionButton.getBoundingClientRect().height);
	var buttonWidth = parseInt(activeActionButton.getBoundingClientRect().width);
	var actionMenusPopUp = document.getElementById('actionMenusPopUp');
	actionMenusPopUp.style.display = "block";
	var popUpWidth = parseInt(actionMenusPopUp.getBoundingClientRect().width);
	var popUpHeight = parseInt(actionMenusPopUp.getBoundingClientRect().height);
	var newTop = (bottomPosition - height/2);
	if((parseInt(newTop) + parseInt(popUpHeight)) > parseInt(document.body.scrollHeight))
	{
		newTop = parseInt(newTop) - parseInt(popUpHeight);
		actionMenusPopUp.style.borderRadius = "5px 15px 0px 15px";
	}
	else
	{
		actionMenusPopUp.style.borderRadius = "15px 0px 15px 5px";
	}
	actionMenusPopUp.style.top = newTop + "px";
	actionMenusPopUp.style.left = ((leftPosition - popUpWidth + buttonWidth/2) - 8) + "px";
}
//hideActionMenu
function hideActionMenu()
{
	var actionMenusPopUp = document.getElementById('actionMenusPopUp');
	actionMenusPopUp.style.display = "none";
}
//showModalForEdit
function showModalForEdit()
{
	showMainLoadingScreen();
	document.getElementById('addButton').style.display = "none";
	document.getElementById('editButton').style.display = "flex";
	var actionMenusPopUp = document.getElementById('actionMenusPopUp');
	actionMenusPopUp.style.display = "none";
	var profilePopUpContainer = document.getElementById('profilePopUpContainer');
	var popUpHeaderCaption = document.getElementById('popUpHeaderCaption');
	popUpHeaderCaption.innerHTML = "EDIT PROFILE";
	var userID = document.getElementById('hiddenTrainingInput').value;
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.success == 0)
			{
				alert("Something went wrong while loading the employee's details.");
			}
			else if(myJSON.success == 1)
			{
				document.getElementById('profilefirstname').value = myJSON.firstName;
				document.getElementById('profilemiddlename').value = myJSON.middleName;
				document.getElementById('profilelastname').value = myJSON.lastName;
				document.getElementById('profilebirthday').value = myJSON.birthday;
				document.getElementById('profilegender').value = myJSON.gender;
				document.getElementById('profilestreet').value = myJSON.street;
				document.getElementById('profilebarangay').value = myJSON.barangay;
				document.getElementById('profilecity').value = myJSON.city;
				document.getElementById('profileprovince').value = myJSON.province;
				document.getElementById('profilecontactNumber').value = myJSON.contactNumber;
				document.getElementById('profileemail').value = myJSON.email;
				document.getElementById('profiledepartment').value = myJSON.department;
				document.getElementById('profilesss').value = myJSON.sss;
				document.getElementById('profiletin').value = myJSON.tin;
				document.getElementById('profilephilhealth').value = myJSON.philhealth;
				document.getElementById('profileusername').value = myJSON.userName;
				document.getElementById('profilepassword').value = myJSON.password;
				document.getElementById('profileconfirmpassword').value = myJSON.password;
				document.getElementById('profileRole').value = myJSON.role;
				profilePopUpContainer.style.display = "block";
			}
			hideMainLoadingScreen();
		}
	};
	xhttp.open("GET","php/fetchEmployeeDetailsForEdit.php?userID="+userID,true);
	xhttp.send();
}
//showModalForDelete
function showModalForDelete()
{
	var actionMenusPopUp = document.getElementById('actionMenusPopUp');
	actionMenusPopUp.style.display = "none";
	var deleteEmployeePopUpContainer = document.getElementById('deleteEmployeePopUpContainer');
	deleteEmployeePopUpContainer.style.display = "block";
}
//deleteEmployee
function deleteEmployee()
{
	showMainLoadingScreen();
	var hiddenTrainingInput = document.getElementById('hiddenTrainingInput').value;
	//var inputToCheckSearch = document.getElementById('inputToCheckSearch').value;
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.success == 0)
			{
				alert('Something went wrong while deleting the employee.');
			}
			else if(myJSON.success == 1)
			{
				hidePopUp('deleteEmployeePopUpContainer');
				alert('Employee successfully deleted.');
				var inputToCheckSearch = document.getElementById('inputToCheckSearch').value;
				if(inputToCheckSearch == 1)
				{
					var profileBodySearchInput = document.getElementById('profileBodySearchInput').value;
					liveSearch(profileBodySearchInput,'employee');
				}
				else
				{
					showEmployees();
				}
				/*
				if(inputToCheckSearch == '1')
				{
					var trainingBodySearchInput = document.getElementById('trainingBodySearchInput').value;
					liveSearch(trainingBodySearchInput,'training');
				}
				else
				{
					showTrainings();
				}
				*/
			}
			hideMainLoadingScreen();
		}
	};
	xhttp.open("GET","php/deleteEmployee.php?userID="+hiddenTrainingInput,true);
	xhttp.send();
}
//showModalForStatus
function showModalForStatus()
{
	showMainLoadingScreen();
	var actionMenusPopUp = document.getElementById('actionMenusPopUp');
	actionMenusPopUp.style.display = "none";
	var statusPopUpContainer = document.getElementById('statusPopUpContainer');
	statusPopUpContainer.style.display = "block";
	var userID = document.getElementById('hiddenTrainingInput').value;
	/*
	if(isSearch == "noSearch")
	{
		var traineeID = document.getElementById('hiddenTrainingInput').value;
	}
	else if(isSearch == "search")
	{
		var traineeID = document.getElementById('hiddenTraineeInputForMoreDetails').value;
	}
	*/
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.success == 0)
			{
				alert("Something went wrong while loading the employee's status.");
			}
			else if(myJSON.success == 1)
			{
				document.getElementById('employeePopUpSelectBoxStatus').value = myJSON.status;
			}
			hideMainLoadingScreen();
		}
	};
	xhttp.open("GET","php/fetchEmployeeStatus.php?userID="+userID,true);
	xhttp.send();
}
//editStatus
function editStatus()
{
	showMainLoadingScreen();
	/*
	if(hiddenIsSearchTrainingInput == "0")
	{
		var traineeID = document.getElementById('hiddenTrainingInput').value;
	}
	else if(hiddenIsSearchTrainingInput == "1")
	{
		var traineeID = document.getElementById('hiddenTraineeInputForMoreDetails').value;
	}
	*/
	var userID = document.getElementById('hiddenTrainingInput').value;
	var employeePopUpSelectBoxStatus = document.getElementById('employeePopUpSelectBoxStatus').value;
	XMLrequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = JSON.parse(this.responseText);
			if(myJSON.success == 0)
			{
				alert("Something went wrong while changing the employee's status.");
			}
			else if(myJSON.success == 1)
			{
				hidePopUp('statusPopUpContainer');
				alert("Employee's status successfully changed.");
				var inputToCheckSearch = document.getElementById('inputToCheckSearch').value;
				if(inputToCheckSearch == 1)
				{
					var profileBodySearchInput = document.getElementById('profileBodySearchInput').value;
					liveSearch(profileBodySearchInput,'employee');
				}
				else
				{
					showEmployees();
				}
			}
			hideMainLoadingScreen();
		}
	};
	xhttp.open("GET","php/editEmployeeStatus.php?userID="+userID+"&status="+employeePopUpSelectBoxStatus,true);
	xhttp.send();
}
//liveSearch
function liveSearch(searchValue,searchType)
{
	var inputToCheckSearch = document.getElementById('inputToCheckSearch');
	if(searchType == 'employee')
	{
		var searchCaptionForEmployee = document.getElementById('searchCaptionForEmployee');
		var employeeMainBodyContent = document.getElementById('employeeMainBodyContent');
		searchCaptionForEmployee.innerHTML = "Searching...";
		var searchMessageContainer = document.getElementById('searchMessageContainer');
		if(!/\S/.test(searchValue))
		{
			searchMessageContainer.style.display = "none";
			inputToCheckSearch.value = '0';
			showEmployees();
			closeSearch('employees');
		}
		else
		{
			searchMessageContainer.style.display = "flex";
			inputToCheckSearch.value = '1';
			XMLrequest();
			xhttp.onreadystatechange = function()
			{
				if (this.readyState == 4 && this.status == 200)
				{
					var myJSON = JSON.parse(this.responseText);
					if(myJSON.success == 1)
					{
						employeeMainBodyContent.innerHTML = myJSON.html;
						searchCaptionForEmployee.innerHTML = 'Showing results for &nbsp;<b class="searchCaption">"' + searchValue + '"</b>';
						dynamicTable();
					}
					else
					{
						employeeMainBodyContent.innerHTML = myJSON.html;
						searchCaptionForEmployee.innerHTML = 'Showing results for &nbsp;<b class="searchCaption">"' + searchValue + '"</b>';
						dynamicTable();
					}
				}
			};
			xhttp.open("GET","php/liveSearchEmployee.php?searchValue="+searchValue,true);
			xhttp.send();
		}
	}
}
//closeSearch
function closeSearch(searchType)
{
	var searchMessageContainer = document.getElementById('searchMessageContainer');
	searchMessageContainer.style.display = "none";
	document.getElementById('inputToCheckSearch').value = '0';
	if(searchType == 'employee')
	{
		showEmployees();
	}
	dynamicTable();
}
function dynamicTable()
{
	if(document.body.contains(document.getElementById('mainBody')))
	{
		var mainBodyContent = document.getElementsByClassName('mainBodyContent')[0];
		var mainBody = document.getElementById('mainBody');
		var mainHeader = document.getElementById('mainHeader');
		var screenHeight = document.body.getBoundingClientRect().height;
		var mainHeaderHeight = mainHeader.getBoundingClientRect().height;
		var mainBodyTop = mainBody.getBoundingClientRect().top;
		mainBody.style.maxHeight = (parseInt(screenHeight) - parseInt(mainBodyTop)) + "px";
		mainBodyContent.style.maxHeight = (parseInt(screenHeight) - parseInt(mainBodyTop) - 26) + "px";
	}
}