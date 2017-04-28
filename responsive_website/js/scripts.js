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
$("#submit-tool").on("click", function() {
	console.log("clicked!");

	
/*creating an if else statement to check if the text box was empty when submitting*/
	// first we store the content of message-box into a var
	var comment = $(".message-box").val(); 
	if(comment.length == 0){
		console.log("text box was empty!");
		$("#popup-msg-sent").modal("toggle");
		$("#popup-msg-sent h1").append("Write Something!");
		$("#popup-msg-sent p").append("You need to write us something for us to be able to help you.");
		$("#popup-msg-sent").modal("close");
		$("#popup-msg-sent h1 p").clear();
		// I WANTED TO KEEP MY HTML CLEAN BY ADDING
		// ALL THE POPUP CASES IN THE SCRIPT AREA
		// BUT I'M NOT ABLE TO CLEAR THE CONTENT AFTER 
		// I FILL IT UP AND THEY STACK UNTIL THE PAGE IS REFRESHED
	}
	else{
		console.log(comment); /*testing if the msg has been stored in the var*/
		$("#visible-comment").html(comment);
		$("#message-box , #name-box , #email-box , #submit-tool").hide(); /*we hide the boxes*/
		$("#confirm-submition").empty(); /*change submission text label for message sent label*/
		$("#confirm-submition").append("Message Sent:");
		$("#confirm-submition , #name-label, #email-label").css("color","#A9A9A9"); /*change colour to inactive for submission box label texts*/
	    $("#popup-msg-sent").modal("toggle"); /*triggers message sent confirmation pop up*/
	    $("#popup-msg-sent h1").append("Sent!");
	    $("#popup-msg-sent p").append("Thanks for contacting us!<br/> We'll get back to you as soon as possible!");
		$("#popup-msg-sent h1 p").clear();
	};

	

	
}); /*closing the submit button toggle events */

// ############################################
// ############################################
     //######## END EVENTS ##############//

}); //END OF 'DOC READY FUNCTION'


 