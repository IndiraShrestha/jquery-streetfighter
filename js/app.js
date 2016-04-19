$(document ).ready( function() {
	
	

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		//The throwing and hadouken needs to be hidden as well because of
		//the edge case its just senario that is possible but not expected
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		//the same logic of edge case
		$('.ryu-still').show();
		$('.hadouken').hide();
	})
	.mousedown(function(){
		//play the hadouken sound
		//after setting the function playHadouken the following line is just calling the function to when to play
		playHadouken ();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-still').hide();
		$('.hadouken').finish().show().animate(
			{'left': '1200px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','520px');
			}
		//this is more generic and portable	
			);
		//play the hadouken anime and the sound
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		
	//ryu goes back to his ready position and dont want hadouken to disapper	
	});
	
});

//this gets setting the function playHadouken for the sound
	function playHadouken(){
		$('#hadouken-sound')[0].volume=0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}