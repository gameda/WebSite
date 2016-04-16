$(document).ready(function(){

    $("#tabs > li").click(function(){
        var identifier = $(this).attr("id");
        
        $("#tabs > li").removeClass('selected');
        $(this).addClass('selected');
        
        $("#tabcontent > div").removeClass('active');
        $("#tabcontent > #content-" + identifier).addClass('active');
    });

    var dataSession = {
        action: "SESSION",
    }
    var dataComments = {
        action: "COMMENTS",
    }
    var dataDelet = {
        action: "DELETSESSION",
    }


        
    $.ajax({
        url: "data/applicationLayer.php",
        type: "POST",
        data: dataComments,
        dataType: "html",
        success: function(Data){

            $("#content-tab1 div").append(Data);
                
        },
                
        error: function(errorMsg)
            {
                alert(errorMsg.statusText); 
            }

    });

    $.ajax({
        url: "data/applicationLayer.php",
        type: "POST",
        data: dataSession,
        dataType: "html",
        contentType: "application/x-www-form-urlencoded",
        success: function(Data){
            $("#content-tab3").append(Data);
        },
        error: function(errorMsg)
            {
                alert(errorMsg.statusText);
                window.location.replace("login.html"); 
            }
    });


    $("#tab4").on("click", function(){
        $.ajax({
            url:"data/applicationLayer.php",
            type:"POST",
            data: dataDelet,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            succes: function(sessionObjJson){
                window.location.replace("login.html");
                alert("sessionObjJson");

            },
            error: function(errorMsg){
                alert(errorMsg.statusText); 
                window.location.replace("login.html");

                
            }
        });
    });


    $("#comentabttn").click(function(){

        var text = $("#mycoment").val();

        if(text != ""){

            var dataToSend = { 
                comment : text,
                action: "POSTCOMMENT", 
            }

            $.ajax({
                url: "data/applicationLayer.php",
                type: "POST",
                data: dataToSend,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                success: function(jsonObject) {
                    //alert(jsonObject.fname+ " " + jsonObject.lname);
                    var currentHTML = ""; 
                    currentHTML +="<div class = comment>";
                    currentHTML +="<h3>" + jsonObject + " </h3>";
                    currentHTML +="<p>" + text + "</p";
                    currentHTML +="</div>";
                    $("#content-tab1 #comments").append(currentHTML);
                    $("#mycoment").val('');


                },
                error: function(errorMsg) {
                    alert("Login ERROR " + errorMsg.statusText); 
                }

            });

        }
        
    });

    $("#searchBttn").click(function(){


        $("#usersResult").html('');
        var $text = $("#searchUser").val();


        if($text != ""){

            var dataToSend = { 
                searchName : $text,
                action: "SEARCHUSER", 
            }
        }
        $.ajax({
            url: "data/applicationLayer.php",
            type: "POST",
            data: dataToSend,
            dataType: "html",
            contentType: "application/x-www-form-urlencoded",
            success: function(Data) {
                $("#usersResult").append(Data);

            },
            error: function(errorMsg)
            {
                alert(errorMsg.statusText); 
            }
        });

    });




}); //END



