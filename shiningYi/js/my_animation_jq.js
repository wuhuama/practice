for (var i = 1;  i < $('.photo').length+1; i ++) {
	$('.photo'+i).mouseenter(function(){
		$(this.children).last().attr('src','img/play_small_b.png');
	});
	$('.photo'+i).mouseleave(function(){
		$(this.children).last().attr('src','img/play_small_h.png');
	});
}

