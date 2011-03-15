/* ================================================================ 
Copyright (c) 2011 Stu Nicholls - iStu.co.uk. All rights reserved.
This script and the associated html may be modified in any 
way to fit your requirements.
=================================================================== */

$(document).ready(function () {

/* set up the image sizing, positions and opacity */
iStu8Pics = $('div.iStu8 img').length;
iStu8Opacity = 1;
iStu8Width = $('div.iStu8').width()-20;
iStu8Max = iStu8Width;
iStu8zIndex = iStu8Pics;
iStu8Top = iStu8Pics*iStu8Pics*1.6;
iStu8TopGap = iStu8Pics;

/* arrays to hold these sizes, positions and opacity */ 
var iStu8L = Array(iStu8Pics);
var iStu8W = Array(iStu8Pics);
var iStu8O = Array(iStu8Pics);
var iStu8Z = Array(iStu8Pics);
var iStu8T = Array(iStu8Pics);

iStu8Count = 0;

/* place these css styles into each image */
$.each($("div.iStu8 img"), function() {
$(this).width(iStu8Width)
.css('left',(iStu8Max-iStu8Width)/2)
.css('opacity',iStu8Opacity)
.css('zIndex',iStu8zIndex)
.css('top',iStu8Top);

/* populate the arrays holding the sizes, positions and opacity */
iStu8L[iStu8Count] = (iStu8Max-iStu8Width)/2;
iStu8W[iStu8Count] = iStu8Width;
iStu8O[iStu8Count] = iStu8Opacity;
iStu8Z[iStu8Count] = iStu8zIndex;
iStu8T[iStu8Count] = iStu8Top;

iStu8Width=iStu8Width*0.8;
iStu8Opacity=iStu8Opacity*0.7;
iStu8zIndex--
iStu8Top = iStu8Top - (iStu8TopGap*3);
iStu8TopGap--
iStu8Count++
});

/* the bit that does all the work when clicking the images */
$("div.iStu8").click(function() {
/* enlarge and fade out the top image then make it invisible and shrink its size so that it doesn't cover any of the page content */
$("div.iStu8 img").eq(0).animate({opacity:0, left:-iStu8Width*1.125, top:iStu8Pics*iStu8Pics*2, width:iStu8Max*1.25},500, function() {$("div.iStu8 img").eq(iStu8Pics-1).css('width','0').css('left','50%')});

/* rotate the images so that the top image becomes the bottom image */
$('div.iStu8').find(':first').remove().appendTo('div.iStu8');

/* animate each image so that it takes on the size, position and opacity of the image in its new position using the array values */
for (var i=0; i<iStu8Pics-1; i++) {
$("div.iStu8 img").eq(i).css('zIndex',iStu8Z[i]);
$("div.iStu8 img").eq(i).animate({opacity:iStu8O[i],left:iStu8L[i],top:iStu8T[i],width:iStu8W[i]},500);
}

});

});
