$(document).ready(function(){

  var imgArray =[
	{
	  	title: 'Placeholder Title 1',
	  	pic: 'img/carousel/powerful-combos.jpg'

	 },

	 {
	  	title:'Placeholder Title 2',
	  	pic: 'img/carousel/connect-with-friends.jpg'

	 },
	 	
	 {
		title:'Placeholder Title 3',
	  	pic: 'img/carousel/play-anytime.jpg'

	 },

	 {
		title:'Placeholder Title 3',
	  	pic: 'img/carousel/Its-a-match-store.jpg'

	 },

  ];

console.log(imgArray);
for(var i=0; i < imgArray.length; i++){
		$("#works").append(" \
		<div class='hidden-xs col-sm-3 work-img'> \
			<span class='info'><p class='proj-title'></p> '" + imgArray[i].title + "'</span>\
       		<img src='" + imgArray[i].pic + "' > \
      	</div> \
      ");
	};
	

}); //END OF 'DOC READY FUNCTION'