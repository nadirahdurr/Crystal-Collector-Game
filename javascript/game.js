var random_result;
var lose = 0;
var win = 0;
var previous = 0;
var image;


// $(".crystal").attr('class', 'red');

var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
				'https://78.media.tumblr.com/3eabbc8f3caa8b51d08440b59f4e3ddd/tumblr_nqmo82N5cF1uxptqno1_500.png',
				'http://24.media.tumblr.com/7d848c35bd1f41351e4eab8f7a5b4e19/tumblr_mu6jkfl6Os1rmdrjqo1_500.png',
				'http://24.media.tumblr.com/56d2cea9a56966fa3e1d26d559579c6b/tumblr_mv0wya4Kev1rmdrjqo1_400.png',
				'https://avatanplus.com/files/resources/mid/573cb6afd698f154c5299f07.png'];

random_result = Math.floor((Math.random() * 120) + 19);


$("#result").html('RANDOM NUMBER: ' + random_result);

for(var i = 0; i < 4; i++){

	var random = Math.floor((Math.random() * 12) + 1);

  
	var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal',
			"data-random": random
		});

		crystal.css({
			"background-image":"url('" + (images[i]) + "')",
			"background-size":"cover"
		});

	$(".crystals").append(crystal);

	}

$("#previous").html("", + previous);

}

resetAndStart();

var reset = function () {

}


$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;

	$("#previous").html(previous);

	if(previous > random_result) {
		
		lose++;

		$("#lose").html("LOSSES: " + lose);

		previous = 0;

		resetAndStart();



	}

	else if(previous === random_result){
		
		win++;

		$("#win").html("WINS: " + win);

		previous = 0;

		resetAndStart();

	}


});






// pseudo code

// 4 crystals and random result between 19-120
// every crystal names a random number 1-12
// number should change every time we win or lose
// when clicking any crystal it should be adding with previous result until it equals the total score
// if its not equal we start over
// if it is equal then we increment a win

