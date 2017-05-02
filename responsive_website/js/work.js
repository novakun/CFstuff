$(document).ready(function(){

  var imgArray =['img/carousel/powerful-combos.jpg','img/carousel/connect-with-friends.jpg','img/carousel/play-anytime.jpg','img/carousel/Its-a-match-store.jpg'];

console.log(imgArray);
for(var i=0; i < imgArray.length; i++){
		$("#works").append(" \
			<div class='hidden-xs col-sm-3'> \
        <img src='" + imgArray[i]+ "' > \
      </div> \
      ");
	};
	
}); //END OF 'DOC READY FUNCTION'