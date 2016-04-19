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
        
        if( $("#activity").val() == ""){
            alert("Type your physical activity");
            return;
        }
        if( $("#goal").val()== ""){
            alert("Type your goal");
            return; 
        }
    });
});