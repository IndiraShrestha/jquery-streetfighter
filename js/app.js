$(document ).ready( function() {	
	$('.ryu, .hulk-ryu')
		.mouseenter(showReady)
		.mouseleave(showStill)
		.mousedown(playHadouken)
		.mousedown(showThrowing)
		.mousedown(hadoukenAnime)
		.mouseup(showReady);

    $(document).on('keydown keyup', function(event) {
    	if (event.which === 88) {
    		if (event.type == 'keydown') {
				showCool();
    		} else {
				showStill();
    		}
    	}
    });
/*
    // alternate option
	$(document).keydown(function(event){	
	//we want to bind the keydown to act on key press anywhere to document object. The div (.ryu) doesnt let you input/type on the keys so its better to bind it on the document (intially i had it chained it to the .ryu div which is why the function wasnt working)
		if (event.which === 88)	{		
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('ryu-ready').hide();
			$('ryu-throwing').hide();
			$('.hadouken').hide();
		}	
	}).keyup(function(){	
	//we want to bind the keydown to act on key press anywhere to document object. The div (.ryu) doesnt let you input/type on the keys so its better to bind it on the document (intially i had it chained it to the .ryu div which is why the function wasnt working)
		if (event.which === 88)	{
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			$('ryu-ready').hide();
			$('ryu-throwing').hide();
			$('.hadouken').hide();
		}	
	}); */
});

function showReady() {
	$('.ryu-throwing').hide();
	$('.ryu-still').hide();
	$('.ryu-ready').show();
	$('.ryu-cool').hide();
	$('.hadouken').hide();
}

function showCool() {
	$('.ryu-cool').show();
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.hadouken').hide();
}

function showStill() {
	$('.ryu-cool').hide();
	$('.ryu-still').show();
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.hadouken').hide();
}
function showThrowing() {
	$('.ryu-cool').hide();
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();
}
function hadoukenAnime (){
	$('.hadouken').finish().show().animate(
		{'left': '1200px'},500,
			function(){
				$(this).hide();
				$(this).css('left','520px');
			}
		//this is more generic and portable	
	);

}

//this gets setting the function playHadouken for the sound
	function playHadouken(){
		$('#hadouken-sound')[0].volume=0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}	



