$(document).ready(function(){

	

	//########STARTING SMOOTH SCROLLING #########//
 var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
    if(href != undefined) {
        $root.animate({
            scrollTop: $(href).offset().top
        }, 700, function () {
        window.location.hash = href;
        });
    }
        return false;
    });

    //######## SMOOTH SCROLLING END #########//

	//######## TOOLTIPS START #########//

     $(function () {
   $('#become-tester').tooltip();
   $('#panda-tool').tooltip();
   $('#submint-tool').tooltip();
   $('#go-top-tool').tooltip();
 });
     //######## TOOLTIPS END #########//

// #############################################
// ##########################################
     //######## EVENTS ##############//



//#############################################
// ##########################################
// Character count for the contact box
//#############################################
// ##########################################

$(".message-box").on("keyup", function(){

	var charCount = $(".message-box").val().length;
	$("#char-count").html(charCount);
	console.log(charCount);

//creating a function to change the colour of 
	if(charCount>100){
		$("#char-count").css("color","red");
		$("#char-count").css("font-weight","800");
		$(".message-box").css("color","red");
	}
	else{
		$("#char-count").css("color","#151616");
		$("#char-count").css("font-weight","100");
		$(".message-box").css("color","#151616");
	};

}); //closing the charcount function

//#############################################
// ##########################################
// END OD CHAR COUNT count for the contact box
//#############################################
// ##########################################


//#############################################
// ##########################################
     // SUBMIT BUTTON TOGGLED
//#############################################
// ##########################################
$("#submit-tool").on("click", function() {
	console.log("clicked!");

	/*creating an if else statement to check if the text box was empty when submitting*/
	// first we store the content of message-box into a var
	var comment = $(".message-box").val(); 
	if(comment.length == 0){
		console.log("text box was empty!");
		$("#popup-msg-sent").modal("toggle");
		console.log("modal popup was successfully toggled");
		$("#popup-msg-sent h1").html("Write Something!");
		$("#popup-msg-sent p").html("You need to write us something for us to be able to help you.");
		console.log("popup content was successfully cleared"); //you can clearly see that this console.log is not reached so it fails before
		// I WANTED TO KEEP MY HTML CLEAN BY ADDING
		// ALL THE POPUP CASES IN THE SCRIPT AREA
		// BUT I'M NOT ABLE TO CLEAR THE CONTENT AFTER 
		// I FILL IT UP AND THEY STACK UNTIL THE PAGE IS REFRESHED
	}
	else{
		console.log(comment); /*testing if the msg has been stored in the var*/
		$("#visible-comment").html(comment);
		$("#message-box , #name-box , #email-box , #submit-tool").hide(); /*we hide the boxes*/
		console.log("box containers were successfully hidden");
		$("#confirm-submition").html("Message Sent:");
		$("#confirm-submition , #name-label, #email-label").css("color","#A9A9A9"); /*change colour to inactive for submission box label texts*/
	    $("#popup-msg-sent").modal("toggle"); /*triggers message sent confirmation pop up*/
	    console.log("modal popup was successfully toggled");
	    $("#popup-msg-sent h1").html("Sent!");
	    $("#popup-msg-sent p").html("Thanks for contacting us!<br/> We'll get back to you as soon as possible!");
		console.log("popup content was successfully cleared");
	};

	

	
}); /*closing the submit button toggle events */
//#############################################
// ##########################################
     // SUBMIT BUTTON END
//#############################################
// ##########################################



// ############################################
// ############################################
     //######## END EVENTS ##############//

}); //END OF 'DOC READY FUNCTION'


 