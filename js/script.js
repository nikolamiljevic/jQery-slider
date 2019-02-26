$(document).ready(function(){
//set options
var speed = 500;
var autoswhitch = true;
var autoswhitch_speed = 4000;

//add initial active class
$('.slide').first().addClass('active');

//hide all slides 

$('.slide').hide();

//show first slide
$('.active').show();

//next handler
$('#next').on('click', nextSlide);

//prev handler
$('#prev').on('click', prevSlide);

//auto slider handler

	if(autoswhitch == true){
		setInterval(nextSlide, autoswhitch_speed);
	}

	//switch slide auto

	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');

		if($('.oldActive').is(':last-child'))
		{
			$('.slide').first().addClass('active');
		}else{
			$('.oldActive').next().addClass('active');
		}
			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
	}
//prev slide auto
	function prevSlide(){

		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		}else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});