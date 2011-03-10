$(document).ready(function () {
	$('#menuHolder ul li a').mouseover(function (event) {
		if (this == event.target) {
			$(this).parent().toggleClass('clicked');
			if ($(this).parent().attr('class').indexOf('clicked') != -1) {
				$(this).siblings('ul').animate({"top": "35px"}, {queue:false,duration:(500)}, "swing");
				}
				else {
				$(this).siblings('ul').animate({"top": "0px"}, {queue:false,duration:(500)}, "swing");
			}
			$(this).parent().siblings().removeClass('clicked').find('ul').animate({"top": "0px"}, {queue:false,duration:(500)}, "swing");
		}
	})
	$('#menuHolder ul li:not(:has(ul)) a').mouseout(function (event) {
		if (this == event.target) {
			$(this).parent().toggleClass('clicked');
			$(this).parent().siblings().removeClass('clicked').find('ul').animate({"top": "0px"}, {queue:false,duration:(500)}, "swing");
		}
	});
});
