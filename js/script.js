var typed = new Typed('.defil', {
	strings: ['graphic artist','developer', 'a pickle rick'],
	loop: (true)
	});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({items: 1,loop: true ,nav: true});
});

$(function(){
	$.scrollIt({
		easing: 'ease',
		scrollTime: 1000,
		topOffset: 0
	});
});

var positionsect = $("#deux").position().top;

var positionact = window.scrollY;

if (positionsect.top >= positionact) {
	$("#navscroll").css('background-color', 'black');
	$("#navscroll").css('transition', 'background-color 2s');
}