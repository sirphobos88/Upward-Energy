$(document).ready(function () {


baucePics = $('div.bauce img').length;
bauceOpacity = 1;
bauceWidth = $('div.bauce').width()-20;
bauceMax = bauceWidth;
baucezIndex = baucePics;
bauceTop = baucePics*baucePics*0.5;
bauceTopGap = baucePics;


var bauceL = Array(baucePics);
var bauceW = Array(baucePics);
var bauceO = Array(baucePics);
var bauceZ = Array(baucePics);
var bauceT = Array(baucePics);

bauceCount = 0;


$.each($("div.bauce img"), function() {
$(this).width(bauceWidth)
.css('left',(bauceMax-bauceWidth)/2)
.css('opacity',bauceOpacity)
.css('zIndex',baucezIndex)
.css('top',bauceTop);


bauceL[bauceCount] = (bauceMax-bauceWidth)/2;
bauceW[bauceCount] = bauceWidth;
bauceO[bauceCount] = bauceOpacity;
bauceZ[bauceCount] = baucezIndex;
bauceT[bauceCount] = bauceTop;

bauceWidth=bauceWidth*0.8;
bauceOpacity=bauceOpacity*0.7;
baucezIndex--
bauceTop = bauceTop - (bauceTopGap*0.5);
bauceTopGap--
bauceCount++
});


$("div.bauce").click(function() {

$("div.bauce img").eq(0).animate({opacity:0, left:-bauceWidth*1.125, top:baucePics*baucePics*2, width:bauceMax*1.25},500, function() {$("div.bauce img").eq(baucePics-1).css('width','0').css('left','50%')});


$('div.bauce').find(':first').remove().appendTo('div.bauce');


for (var i=0; i<baucePics-1; i++) {
$("div.bauce img").eq(i).css('zIndex',bauceZ[i]);
$("div.bauce img").eq(i).animate({opacity:bauceO[i],left:bauceL[i],top:bauceT[i],width:bauceW[i]},500);
}

});

});
