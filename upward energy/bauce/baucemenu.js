$(document).ready(function () {
timer=0;

	$('#nav li a').mouseover(function (event) {
		if (this == event.target) {
			$(this).parent().toggleClass('clicked').children('ul').animate({ width: 'show' });
			$(this).siblings().children().removeClass('clicked').find('ul').animate({ width: 'hide' });
			$(this).parent().siblings().removeClass('clicked').find('ul').animate({ width: 'hide' });
		}
	})
	$('#nav li:not(:has(ul)) a').mouseout(function (event) {
		if (this == event.target) {
			$(this).parent().removeClass('clicked');
			$(this).siblings().children().removeClass('clicked').find('ul').animate({ width: 'hide' });
			$(this).parent().siblings().removeClass('clicked').find('ul').animate({ width: 'hide' });
		}
	}).addClass('nosub');

	$("#nav").mouseover(function() {
		clearTimeout(timer);
		});
	$("#nav").mouseleave(function() {
			timer = window.setTimeout(function(){
				$('#nav li > a').siblings().children().removeClass('clicked').find('ul').fadeOut();
				$('#nav li > a').parent().siblings().removeClass('clicked').find('ul').fadeOut();
			}, 1000);
		}); 

});
