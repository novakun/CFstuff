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

     //######## EVENTS ##############//
$("#submit-tool").on("click", function() {
	console.log("clicked!");
	var comment = $(".message-box").val();
	console.log(comment); /*testing if the msg has been stored in the var*/
	$("#visible-comment").html(comment);
	$("#message-box , #name-box , #email-box , #submit-tool").hide(); /*we hide the boxes*/
	$("#confirm-submition").empty(); /*change submission text label for message sent label*/
	$("#confirm-submition").append("Message Sent:");
	$("#confirm-submition , #name-label, #email-label").css("color","#A9A9A9"); /*change colour to inactive for submission box label texts*/
    $("#popup-msg-sent").modal("toggle"); /*triggers message sent confirmation pop up*/
	
	return false;
	// $("#visible-comment").html.(comment);
	
});



     //######## END EVENTS ##############//

}); //END OF 'DOC READY FUNCTION'


 