$(function(){
	$(".content_view").delegate(".app_block_view","click",function(){
		var uri=$(this).attr("actionurl");
		window.open(uri);
	});
	$(".content_view").delegate(".app_desc_btn","click",function(){
		var info=$(this).attr("pop-info");
		open_pop(info);
		return false;
	});
	$("body").delegate(".pop_view","click",function(){
		close_pop();
		return false;
	});
});
