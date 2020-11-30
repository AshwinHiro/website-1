$("document").ready(function(){

    $("#product-mask").click(function(){

        var changeText = $("<p>");

        changeText.append(`<p><strong>Masks</strong> reduce potential exposure risk from an infected person whether they have symptoms or not.</p>
        <p>People wearing masks are protected from getting infected.</p>
        <p>Masks also prevent onward transmission when worn by a person who is infected.</p>
        <p>Masks also prevent as part of comprehensive.<strong>'Do it All.'</strong></p>`);
        
        $("#text-Info").html(changeText);

    });

    $("#product-armour").click(function(){

        var changeText = $("<p>");

        changeText.append(`<p><strong>Lotions are applied to external skin with bare hands, a brush a clean cloth, or cotton wool.</strong></p>
        <p>While a lotion may be used as a medicine delivery system, many lotions, especially hand lotions, and body lotions are 
        meant instead to simply smooth, moisture, soften and perhaps perfume the skin.</p>`);
        
        $("#text-Info").html(changeText);

    });

    $("#product-cure").click(function(){

        var changeText = $("<p>");

        changeText.append(`<p><strong>Palmative Hand Sanitizer gives you 99% germ protection with 100% love.</strong></p>
        <p>Give your hands the best of gem protection with Palmotive Anti Bacterial Hand Sanitizer.</p>
        <p><strong>Take Personal Care.</strong></p>`);
        
        $("#text-Info").html(changeText);

    });

    $("#product-visage").click(function(){

        var changeText = $("<p>");

        changeText.append(`<p><strong>A face shield</strong> is a film made from plastic or other transparent material desgned to be worn like a visor.</p>
        <p><strong>It is attached using a band that goes around the top of your head.</strong></p>
        <p><strong>Think of a visor, a weldor wears to protect themselves from sparks and injury.</strong></p>
        <p>Health-care workers use face shields to block bodily fluids from coming into contact with their face and potentially causing injection.</p>`);
        
        $("#text-Info").html(changeText);

    });

    $("#product-vigour").click(function(){

        var changeText = $("<p>");

        changeText.append(`<p>Are facing shields good for everyday use? CDC does not recommend wearing face shields for normal everyday activities.</p>
        <p><strong>Face shields have the added benefit of protecting your eyes and discouraging you from touching your face by acting as a physical barrier</strong></p>`);
        
        $("#text-Info").html(changeText);

    });

    $("#text-Info").click(function(){

        var changeText = $("<p>");

        changeText.append(`<p><strong>Covid</strong> safety <strong>kits.</strong></p>
                <p>#Safety is the new <strong><span style="color:red">Normal.</span></strong></p>
                <p>Lorem Ipsum is simple dummy text of printing and typesetting industry. Lorem Ipsum has been the indust standard dummy text ever since the <strong>1500s.</strong></p>
                <p>It has <strong>survived</strong> not only five centuries, but also the leap into electronic typeset remaining essential unchanged.</p>`);
        
        $("#text-Info").html(changeText);

    });

    $("#submit1").on("click",function(){
        
        var lengthname = $("#name").val().length;
        var lengthaddress = $("#address").val().length;
        var lengthcompany = $("#companyname").val().length;
        var lengthmes = $("#message").val().length;
        
        if(lengthname>0){
            if(lengthaddress>0){
                if(lengthcompany>0){
                    if(lengthmes>0){
                        alert("Your Message Submitted");
                    }
                    else{
                        alert("Enter the Message");
                    }
                }   
                else if(lengthmes>0){
                    alert("Enter the Company Name");
                }
                else{
                    alert("Enter the Company Name and Message");
                }
            }
            else if(lengthcompany>0){
                if(lengthmes>0){
                    alert("Enter the Address");
                }
                else{
                    alert("Enter the Address and Message");
                }
            }    
            else if(lengthmes>0){
                alert("Enter the Address and Company Name");
            }
            else{
                alert("Enter the Address, Company Name and Message");
            } 
        }
        else if(lengthaddress>0){
            if(lengthcompany>0){
                if(lengthmes>0){
                    alert("Enter the Name");
                }
                else{
                    alert("Enter the Name and Message");
                }
            }
            else if(lengthmes>0){
                alert("Enter the Name and Company Name");
            }
            else{
                alert("Enter the Name, Company Name and Message");
            }    
        }
        else if(lengthcompany>0){
            if(lengthmes>0){
                alert("Enter the Name and Address");
            }
            else{
                alert("Enter the Name, Address and Message");
            }
        }
        else if(lengthmes>0){
            alert("Enter the Name, Address and Company Name");
        }
        else{
            alert("Enter the Name, Address, Company Name, Message and the Submit");
        }
    });
    
    
    $("input").attr("required",true);
    
    $("#subscribe").on("click",function(){
        if($("#mail").val().length > 0){
            alert("SUBSCRIBED");
        }
        else{
            $("#subscribe").attr("data-dismiss","modal");
            alert("NOT SUBSCRIBED YET. Enter your E-mail Address");
        }

    });
    
    
    $(".smallImgs").mouseover(function(){
        var smallIMG = document.getElementsByClassName("smallImgs")
        var activeIMG = document.getElementsByClassName("Imgactive")
        for(var i=0; i<smallIMG.length;i++){
            smallIMG[i].addEventListener("mouseover",function(){
                if(activeIMG.length>0){
                    activeIMG[0].classList.remove("Imgactive")
                    
                }
                
            });
        }
        this.classList.add("Imgactive")
        document.getElementById("featured").src=this.src
        
    });

    $("#featured").click(function(){

        var text_a = $("<p>");
        
        if($("#featured").attr("src") === "file:///D:/DEVELOPMENT/Starter/CreationTools/Beginner/CodingTools/Projects/HTML/Project%202%20Learning/Products/Products-mask.png" || $("#featured").attr("src") === "Products/Products-mask.png"){
            text_a.append(`<p><strong>Masks</strong> reduce potential exposure risk from an infected person whether they have symptoms or not.</p>
            <p>People wearing masks are protected from getting infected.</p>
            <p>Masks also prevent onward transmission when worn by a person who is infected.</p>
            <p>Masks also prevent as part of comprehensive.<strong>'Do it All.'</strong></p>`);
        }
        else if($("#featured").attr("src") === "file:///D:/DEVELOPMENT/Starter/CreationTools/Beginner/CodingTools/Projects/HTML/Project%202%20Learning/Products/Products-armour.png"){
            text_a.append(`<p><strong>Lotions are applied to external skin with bare hands, a brush a clean cloth, or cotton wool.</strong></p>
            <p>While a lotion may be used as a medicine delivery system, many lotions, especially hand lotions, and body lotions are 
            meant instead to simply smooth, moisture, soften and perhaps perfume the skin.</p>`);
        }
        else if($("#featured").attr("src") === "file:///D:/DEVELOPMENT/Starter/CreationTools/Beginner/CodingTools/Projects/HTML/Project%202%20Learning/Products/Products-cure.png"){
            text_a.append(`<p><strong>Palmative Hand Sanitizer gives you 99% germ protection with 100% love.</strong></p>
            <p>Give your hands the best of gem protection with Palmotive Anti Bacterial Hand Sanitizer.</p>
            <p><strong>Take Personal Care.</strong></p>`);


        }
        else if($("#featured").attr("src") === "file:///D:/DEVELOPMENT/Starter/CreationTools/Beginner/CodingTools/Projects/HTML/Project%202%20Learning/Products/Products-visage.png"){
            text_a.append(`<p><strong>A face shield</strong> is a film made from plastic or other transparent material desgned to be worn like a visor.</p>
            <p><strong>It is attached using a band that goes around the top of your head.</strong></p>
            <p><strong>Think of a visor, a weldor wears to protect themselves from sparks and injury.</strong></p>
            <p>Health-care workers use face shields to block bodily fluids from coming into contact with their face and potentially causing injection.</p>`);

        }
        else if($("#featured").attr("src") === "file:///D:/DEVELOPMENT/Starter/CreationTools/Beginner/CodingTools/Projects/HTML/Project%202%20Learning/Products/Products-Vigour.png"){
            text_a.append(`<p>Are facing shields good for everyday use? CDC does not recommend wearing face shields for normal everyday activities.</p>
            <p><strong>Face shields have the added benefit of protecting your eyes and discouraging you from touching your face by acting as a physical barrier</strong></p>`);

        }
        
        $("#text-Info2").html(text_a);

    });

    $("#text-Info2").click(function(){

        var changeText = $("<p>");

        changeText.append(`<p><strong>Covid</strong> safety <strong>kits.</strong></p>
                <p>#Safety is the new <strong><span style="color:red">Normal.</span></strong></p>
                <p>Lorem Ipsum is simple dummy text of printing and typesetting industry. Lorem Ipsum has been the indust standard dummy text ever since the <strong>1500s.</strong></p>
                <p>It has <strong>survived</strong> not only five centuries, but also the leap into electronic typeset remaining essential unchanged.</p>
                <p><strong>Click the image to get the details.</strong></p>
                <p><strong>Click the text to change it back.</strong></p>`);
        $("#text-Info2").html(changeText);

    });

    $("#imgh1").on("click",function(){ $("#image-Preview").html('<img src="Products/Helmets/helmet (1).jpg" width="100%" height="100%" />'); });

    $("#imgh2").on("click",function(){ $("#image-Preview").html('<img src="Products/Helmets/helmet (2).jpg" width="100%" height="100%" />'); });

    $("#imgh3").on("click",function(){ $("#image-Preview").html('<img src="Products/Helmets/helmet (3).jpg" width="100%" height="100%" />'); });

    $("#imgh4").on("click",function(){ $("#image-Preview").html('<img src="Products/Helmets/helmet (4).png" width="100%" height="100%" />'); });

    $("#imgi1").on("click",function(){ $("#image-Preview").html('<img src="Clients logo/Globe.png" width="100%" height="100%" />'); });
    
    $("#imgi2").on("click",function(){ $("#image-Preview").html('<img src="Clients logo/fidelity.png" width="100%" height="100%" />'); });

    $("#imgi3").on("click",function(){ $("#image-Preview").html('<img src="logos/logo.png" width="100%" height="100%" />'); });

    $("#imgi4").on("click",function(){ $("#image-Preview").html('<img src="Clients logo/airtel257.png" width="100%" height="100%" />'); });

    $("#imgi5").on("click",function(){ $("#image-Preview").html('<img src="Clients logo/Dtac.png" width="100%" height="100%" />'); });

    $("#imgi6").on("click",function(){ $("#image-Preview").html('<img src="Clients logo/Clorox.png" width="100%" height="100%" />'); });

    $("#imgc1").on("click",function(){ $("#image-Preview").html('<img src="certificates/certificate (1).jpg" width="100%" height="100%" />'); });

    $("#imgc2").on("click",function(){ $("#image-Preview").html('<img src="certificates/certificate (2).jpg" width="100%" height="100%" />'); });

    $("#imgc3").on("click",function(){ $("#image-Preview").html('<img src="certificates/certificate (3).jpg" width="100%" height="100%" />'); });

    $("#texthelperhide1").click(function(){ $(".text_hider").hide(); });

    $("#texthelpershow1").click(function(){ $(".text_hider").show(); });

    $("#texthelperhide2").click(function(){ $(".text_hider").hide(); });

    $("#texthelpershow2").click(function(){ $(".text_hider").show(); });

    $("#texthelperhide3").click(function(){ $(".text_hider").hide(); });

    $("#texthelpershow3").click(function(){ $(".text_hider").show(); });

    $("#texthelperhide4").click(function(){ $(".text_hider").hide(); });

    $("#texthelpershow4").click(function(){ $(".text_hider").show(); });

    $("#texthelperhide5").click(function(){ $(".text_hider").hide(); });

    $("#texthelpershow5").click(function(){ $(".text_hider").show(); });
});