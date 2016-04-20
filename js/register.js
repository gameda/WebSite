$(document).ready(function(){
    
    $("#registerL").click(function(e){
        var letters = /^[A-Za-z]+$/;
       //Verify FirstName
        if ($("#firstName").val() != "")
            if($("#firstName").val().match(letters)){
                
            }
            else{
                alert("Type only letters in your name");
                return;
            }
        else{
            alert("Type your name");
            return;
        }
        
        //Verify LastName
        if ($("#lastName").val() != "")
            if($("#lastName").val().match(letters)){
                
            }
            else{
                alert("Type only letters in your name");
                return;
            }
        else{
            alert("Type your name");
            return;
        }
        
        if($("#email").val() == ""){
            alert("Type your email");
            return;
        }
        //Verify Username
        if ($("#username").val() == ""){
            alert("Type your username");
            return;
        }
        
        //Verify Password
        if ($("#password").val()== ""){
            alert("Type your password");
            return;
        }        
        
        if($("#country option:selected").val() == 0){
            alert("Select a country");
            return;
        }
        
        if( $("#age").val() == "") {
            alert("Type your age");
            return;
        }
        
        if( $("#weight").val() == "") {
            alert("Type your weight");
            return
        }
        
        if( $("#height").val() == "") {
            alert("Type your height");
            return
        }
        
        if( $("#activity").val() == "0"){
            alert("Type your physical activity");
            return;
        }
        if( $("#goal").val()== "0"){
            alert("Type your goal");
            return; 
        }
        if ($('input[name=gender]:checked').length == 0){
            alert("Select a gender");
            return;
        }

        
        var dataToRegister = {
            firstname : $("#firstName").val(),
            lastname : $("#lastName").val(),
            username : $("#username").val(),
            password : $("#password").val(),
            email : $("#email").val(),
            country : $("#country option:selected").text(),
            gender : $('input[name=gender]:checked').val(),
            age : $("#age").val(),
            weight : $("#weight").val(),
            height : $("#height").val(),
            activity : $("#activity").val(),
            goal : $("#goal").val(),
            action: "REGISTER",
        }
        
        $.ajax({
            url: "/data/applicationLayer.php",
            type: "POST",
            data: dataToRegister,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function(jsonObject)
            {
                window.location.replace("home.html");
            },
            error: function(errorMsg)
            {
                alert("Registration Error" + errorMsg.statusText); 
            }
            });
        
    });
    
    $("#cancel").click(function(e){
         e.preventDefault;
        location.replace("/login.html");
    });
});