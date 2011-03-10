
$(window).load(function(){
/* just one variable to set-up */
speed = 500;

/* setting the initial state of the slideshow and first image */
var picVar = $('.lemonade li.images div.slide img');
totPic = picVar.length;
curPicWidth = picVar.eq(0).width();
curPicHeight = picVar.eq(0).height();
totWidth = 0;

/* calculate the total width of the images and set the div.slide to match */
$.each((picVar), function() {
totWidth = totWidth+$(this).width();
});
$('ul.lemonade li.images div.slide').width(totWidth);

/* find the first photo caption and place in the li.caption */
caption = picVar.eq(0).attr('alt');
$('li.caption').html(caption);

/* resize the containing elements, left/right arrow positions and add the first image caption */
resize(curPicWidth,curPicHeight,caption)


/* monitor 'next' clicks */
$('.lemonade li.next').click (function() {
	picVar = $('.lemonade li.images div.slide img');

/* animate the line of images left one photo - then remove the first image from set, make it the last image then finally move the set to absolute position left:0 */
	curPicWidth = picVar.eq(0).width();
	curPicHeight = picVar.eq(0).height();
	$('ul.lemonade li.images div.slide').animate({left:-curPicWidth}, speed, 
		function() {
		$('ul.lemonade li.images div.slide').find(':first').remove().appendTo('ul.lemonade li.images div.slide');
		$('ul.lemonade li.images div.slide').css('left','0px'); 
	});
/* get the width, height and alt for the currently displayed image */
	curPicWidth = picVar.eq(1).width();
	curPicHeight = picVar.eq(1).height();
	caption = picVar.eq(1).attr('alt');
/* animate the containing elements and left/right arrow positions to match the current image */
	resize(curPicWidth,curPicHeight,caption)
});

/* monitor 'previous' clicks */
$('.lemonade li.prev').click (function() {
/*  get the last image from the set and make it the fist image, then set the left position of the set to minus the width of the new first image */
	$('ul.lemonade li.images div.slide').find(':last').remove().prependTo('ul.lemonade li.images div.slide');
	picVar = $('.lemonade li.images div.slide img');

	curPicWidth = picVar.eq(0).width();
	curPicHeight = picVar.eq(0).height();

	$('ul.lemonade li.images div.slide').css('left',-curPicWidth); 
/* animate the first image to left = 0 */
	$('ul.lemonade li.images div.slide').animate({left:0}, speed);
	caption = picVar.eq(0).attr('alt');

/* animate the containing elements, left/right arrow positions to match the current image and change the caption */
	resize(curPicWidth,curPicHeight,caption)
});

/* resize the containing elements, the left/right arrow positions and update the caption */
function resize (w,h,c) {
	$('.lemonade').animate({width:w, height:h},speed);
	$('.lemonade li.prev').animate({top:(h-123)/2},speed);
	$('.lemonade li.next').animate({top:(h-123)/2},speed);
	$('.lemonade li.images').animate({width:w, height:h},speed);
	$('li.caption').html(c);
}

});
