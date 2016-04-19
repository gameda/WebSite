$(document).ready(function(){
    
    $("#registerL").click(function(e){
        e.preventDefault;
        location.replace("/register.html");
    });
    /*$("#register_button").click(function(){

        var a=false; 
        var b=false;
        var c=false;
        var d=false;
        var e=false;
        var f=false;
        var g=false;
        var h=false;

        if( $("#name input[type=text]").val() == ""){
            $("#name span").removeClass("error").addClass("error_show");
            a = false;
        }else{
            $("#name span").removeClass("error_show").addClass("error");
            a = true;
        }

        if( $("#lastname input[type=text]").val() == ""){
            $("#lastname span").removeClass("error").addClass("error_show");
            b = false;
        }else{
            $("#lastname span").removeClass("error_show").addClass("error");
            b = true;

        }

        if( $("#username input[type=text]").val() == ""){
            $("#username span").removeClass("error").addClass("error_show");
            c = false;
        }else{
            $("#username span").removeClass("error_show").addClass("error");
            c = true;

        }

        if( $("#email input[type=email]").val() == ""){
            $("#email span").removeClass("error").addClass("error_show");
            d = false;
        }else{
            $("#email span").removeClass("error_show").addClass("error");
            d = true;

        }

        if( $("#password input[type=password]").val() == ""){
            $("#password span").removeClass("error").addClass("error_show");
            e = false;
        }else{
            $("#password span").removeClass("error_show").addClass("error");
            e = true;

        }

        if( $("#confirm_password input[type=password]").val() == ""){
            $("#confirm_password span").removeClass("error").addClass("error_show");
            f = false;
        }else{
            $("#confirm_password span").removeClass("error_show").addClass("error");
            f = true;

        }

        if($("#selector select option:selected").attr("value") == "0"){
            $("#selector span").removeClass("error").addClass("error_show");
            g = false;
        }
        else{
            $("#selector span").removeClass("error_show").addClass("error");
            g = true;

        }

        if($("#gender_opc input[name=Gender]:checked").length <= 0){
            $("#gender_opc span").removeClass("error").addClass("error_show");
            h = false;
        }
        else{
            $("#gender_opc span").removeClass("error_show").addClass("error");
            h = true;

        }

        if( a && b && c && d && e && f && g && h){

             var dataToRegister = {
                firstname : $("#name input[type=text]").val(),
                lastname : $("#lastname input[type=text]").val(),
                username : $("#username input[type=text]").val(),
                password : $("#password input[type=password]").val(),
                email : $("#email input[type=email]").val(),
                password : $("#password input[type=password]").val(),
                country : $("#selector select option:selected").text(),
                gender : $("#gender_opc input[name=Gender]:checked").val(),
                action: "REGISTER",


            }

            $.ajax({
                url: "data/applicationLayer.php",
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

        }

    });


    $("#login_button").click(function(){

        var remember = "false"; 

            if($("#cookie_check").prop('checked')){
                remember = "true"; 
            
            }
            else{
                remember = "false"; 
            }

        var dataToSend = {
            username : $("#loginUser").val(),
            password : $("#loginPassword").val(),
            cookie: remember,  
            action: "LOGIN",
        }

        
        $.ajax({
            url: "data/applicationLayer.php",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function(jsonObject)
            {
                //alert(jsonObject.fname+ " " + jsonObject.lname);
                window.location.replace("home.html");




            },
            error: function(errorMsg)
            {
                alert("Login ERROR " + errorMsg.statusText); 
            }

        });
    });

    var datacookie = {
        action: "COOKIE",
    }
    
    $.ajax({
        type: "POST",
        url: "data/applicationLayer.php",
        data: datacookie,
        dataType: "json",
        success: function(cookieJson)
        {
            $("#loginUser").val(cookieJson.cookieValue);
        },
        error: function(errorMsg)
        {
            alert(errorMsg.statusText);
        }

    });


   
*/
});