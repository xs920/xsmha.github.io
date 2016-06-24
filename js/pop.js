$(function(){
	var ww=$(window).width();
	var wh=$(window).height();
	var w=ww-400*2;
	var h=wh-20*2;
	$(".pop_win").width(w);
	$(".pop_win").height(h);
});

function open_pop(info){
	$(".pop_view").fadeIn(300);
	$(".pop_win").fadeIn(300);
	var ww=$(window).width();
	var wh=$(window).height();
	var ow=$(".pop_win").width();
	var oh=$(".pop_win").height();
	var x=(ww-ow)/2;
	var y=(wh-oh)/2;
	$(".pop_win").css({left:x+"px",top:y+"px"});
	$(".pop_win").html("");
	$(".pop_win").html(info);
}

function close_pop(){
	$(".pop_win").fadeOut(300);
	$(".pop_view").fadeOut(300);
}
