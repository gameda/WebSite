<?php
	
	function connect() {
		$servername = "localhost";
		$username = "root";
		$password = "root";
		$dbname = "healthnfood";


		$connection = new mysqli($servername, $username, $password, $dbname);

		if ($connection->connect_error) {
			echo "error";
		    return null;

		}
		else {
			return $connection;
		}
	}

	function loginAction($userName, $userPassword) {

		$conn = connect();


		if ($conn != null) {
			
			$sql = "SELECT * FROM Users WHERE userName ='$userName' AND passWord = '$userPassword'";


			$result = $conn -> query($sql);


			if($result -> num_rows > 0){
				
				while($row = $result -> fetch_assoc()) {

					$response = array("statusTxt" => "SUCCESS", "data" => $row);

				}
				return $response; 
			}

		}

	}

	function registrationAction($userFirstName, $userLastName, $userName, $userPassword, $userEmail, $userCountry, $userGender, $userAge, $userWeight, $userHeight, $userActivity, $userGoal){

        echo("debug");
		$conn = connect();
		if ($conn != null) {

			$sql =  "INSERT INTO users (username, passwrd,fName,lName,email,country,gender,age,weight,height,activity,goal) VALUES ('$userName', '$userPassword', '$userFirstName', '$userLastName', '$userEmail', '$userCountry', '$userGender', '$userAge', '$userWeight', '$userHeight', '$userActivity', '$userGoal')";

		
			$result = $connec -> query($sql); 

			if($result === TRUE) { 

				return TRUE;

			}
		}

	}

	function commentsAction($user){

		$conn = connect();
		if ($conn != null) {

			$sql = "SELECT userName, comment 
					FROM Comments 
					WHERE userName = '$user'
					UNION
					SELECT Comments.userName, Comments.comment 
					FROM Comments
					JOIN Friends ON Friends.userName = '$user'
					WHERE Comments.userName = Friends.friendName";
		
			$result = $conn -> query($sql); 

			if($result -> num_rows > 0) {

				$response = array("statusTxt" => "SUCCESS");
				
				$i = 0;
				while($row = $result -> fetch_assoc()) {

						$response [$i] = $row;
						$i++;

				}
				return $response;
			}
			else {
				header("HTTP/1.1 406 Comment not found");
				echo "Error: " . $sql . "<br>" . $conn->error;
				die("comments were not found in the database"); 

			}
		}

	}


	function postCommentAction($user, $commentText){

		$conn = connect();
		if ($conn != null) {

			$sql = "INSERT INTO Comments(userName, comment) VALUES('$user', '$commentText')";

			$result = $conn -> query($sql); 

			if ($result === TRUE) {
				return TRUE;
			}
			else{

				header("HTTP/1.1 406 Comment not posted");
				die("comment didn't insert in DB"); 
		
			}

		}
		
	}

	function searchUser($user, $name){

		$conn = connect(); 

		if($conn != null){

			$sql = "SELECT Users.userName 
					FROM Users
					LEFT JOIN Friends 
					ON Friends.friendName = Users.userName AND Friends.userName = '$user'
					LEFT JOIN PendingFriendship 
					ON PendingFriendship.userTo = Users.userName AND PendingFriendship.userFrom = '$user'
					WHERE Users.userName LIKE '%$name%'";

			$result = $conn -> query($sql);


			if($result -> num_rows > 0){

				$response = array("statusTxt" => "SUCCESS");
				
				$i = 0;
				while($row = $result -> fetch_assoc()) {

						$response [$i] = $row;
						$i++;

				}
				return $response;
			}
			else {

				$response = array("statusTxt" => "Users not found");
			}
			
		}
		else {
			header("HTTP/1.1 406 Users  not found");
			echo "Error: " . $sql . "<br>" . $conn->error;
			die("Users were not found in the database"); 

		}
	}

	
?>
