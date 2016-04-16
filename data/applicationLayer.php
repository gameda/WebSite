<?php
	header('Accept: application/json');
	header('Content-type: application/json');
	require_once __DIR__ . '/dataLayer.php';

	$action = $_POST["action"];
	

	switch ($action) {
		case 'LOGIN': verifyLogin(); 
			break;
		case 'REGISTER': verifyRegistration();
			break;
		case 'SESSION': verifySession();
			break;
		case 'COMMENTS': verifyComments();
			break;
		case 'POSTCOMMENT': postComment();
			break;
		case 'DELETSESSION': deletSession();
			break;
		case 'COOKIE': rememberCookie();
			break;
		case 'SEARCHUSER': searchUserAction(); 
			break; 
	}


	function verifyLogin() {

		$userName = $_POST["username"]; 
		$userPassword = $_POST["password"];
		$rememberCookie = $_POST["cookie"];

		
		$result = loginAction($userName, $userPassword); 
		

		if ($result["statusTxt"] == "SUCCESS") {

			
			$finalResponse = array("firstName" => $result["data"]["fName"], "lastName" => $result["data"]["lName"]);

			//Starting the session 
			session_start();
			$_SESSION["userName"] = $result["data"]['userName'];
			$_SESSION["fName"] = $result["data"]['fName'];
			$_SESSION["lName"] = $result["data"]['lName'];
			$_SESSION["email"] = $result["data"]['email'];
			$_SESSION["gender"] = $result["data"]['gender'];
			$_SESSION["country"] = $result["data"]['country'];

			//Setting the cookies
			if($rememberCookie == "true"){
				setcookie("usernameCookie", $userName, time() + 3600 * 24 * 30);

			}

			echo json_encode($finalResponse);

		}
		else {
			header('HTTP/1.1 406 User not found');
	        die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
		}
	}



	function verifyRegistration(){

		$userFirstName = $_POST["firstname"];
		$userLastName = $_POST["lastname"];
		$userPassword = $_POST["password"];
		$userEmail = $_POST["email"];
		$userCountry = $_POST["country"];
		$userGender = $_POST["gender"];

		$result = registrationAction($userFirstName, $userLastName, $userPassword, $userEmail, $userCountry, $userGender);

		if($result){

			session_start();
			$_SESSION['userName'] = $userFirstName;
			$_SESSION["fName"] = $userLastName;
			$_SESSION["lName"] = $userName;
			$_SESSION["email"] = $userEmail;
			$_SESSION["gender"] = $userGender;
			$_SESSION["country"] = $userCountry;
			
			echo json_encode("New record created successfully");

		}

		else {
			header("HTTP/1.1 406 User not registered ");
			echo "Error: " . $sql . "<br>" . $conn->error;
			die("user was not able to be registered"); 
			
		}
	}


	function verifySession(){ 

		session_start();
	
		if(isset($_SESSION["userName"])){

			echo "<div class = perfil>";
			echo "<p><b>USERNAME: </b>". $_SESSION["userName"] ."</p>";
			echo "<p><b>NAME: </b>" .$_SESSION["fName"]. ' ' .$_SESSION["lName"]. "</p>";
			echo "<p><b>EMAIL: </b>". $_SESSION["email"] ."</p>";
			echo "<p><b>GENDER: </b>". $_SESSION["gender"] ."</p>";
			echo "<p><b>COUNTRY: </b>". $_SESSION["country"] ."</p>";
			echo "</div>";							
			
		}
		else {
			header("HTTP/1.1 406 Session has expired, you will be redirected to the login");
			echo("Session has expired");
		}
	}

	function deletSession(){

		session_start();
		echo json_encode($_SESSION["userName"]);
		if(isset($_SESSION["userName"])){

			session_destroy();
			echo json_encode(array("success" => "Session deleted"));

		}
		else {
			echo ("error");
			header("HTTP/1.1 406 Session has expired, you will be redirected to the login");
			die(json_encode(array("message" => "Session has expired")));
		}
	}

	function verifyComments(){

		session_start();

		if(isset($_SESSION["userName"])){



			$user = $_SESSION["userName"];

			$result = commentsAction($user);

			$size = count($result);
			if ($result["statusTxt"] == "SUCCESS") { 

				for ($i = 0; $i < $size-1; $i++){
			
					echo "<div class = comment>";
					echo "<h3>".$result[$i]['userName']."</h3>";
					echo "<p>". $result[$i]['comment']."</p>";
					echo "</div>";
				}	
			}

		}
		else {
			header("HTTP/1.1 406 Session has expired, you will be redirected to the login");
			echo("Session has expired");
		}
	}

	function postComment(){

		session_start();
		if(isset($_SESSION["userName"])){

			$commentText = $_POST["comment"];
			$user = $_SESSION["userName"];

			$result = postCommentAction($user, $commentText); 

			if ($result) {
				echo json_encode($user);
			}
		}
		else {
			header("HTTP/1.1 406 Session has expired, you will be redirected to the login");
			echo("Session has expired");
		}
	}

	function rememberCookie(){

		if (isset($_COOKIE["usernameCookie"]))
		{
			echo json_encode(array("cookieValue" => $_COOKIE["usernameCookie"]));
		}
		else
		{
			header('HTTP/1.1 406 Cookie has not been set yet');
			die(json_encode(array('message' => 'Cookie not set')));
		}
	}

	function searchUserAction(){

		session_start();
		if (isset($_SESSION["userName"])){

			$user = $_SESSION["userName"];
			$search = $_POST["searchName"];

			$result = searchUser($user, $search); 

			
			if ($result["statusTxt"] == "SUCCESS") { 



				$size = count($result);
				for ($i = 0; $i < $size-1; $i++){
			
					echo "<div class = user>";
					echo "<p>".$result[$i]['userName']."</p>";
					echo "<input type=button class=addUser value=Add/>";
					echo "</div>";
				}	
			}

		}
		else {
			header("HTTP/1.1 406 Session has expired, you will be redirected to the login");
			echo("Session has expired");
		}

	}
	
?>

































