for (var i = 1; i < 4; i ++) {
	$('#banner'+ i).mouseenter(function (){
		$('#banner'+($(this).index()+1)+' a img').attr('src','img/home/home_pic_'+($(this).index()+1)+'_h.png');
		$('#banner'+($(this).index()+1)+' a .jump').css('border-color','#cfdb00');

	});
	$('#banner'+ i).mouseleave(function (){
		$('#banner'+ ($(this).index()+1) +' a img').attr('src','img/home/home_pic_'+($(this).index()+1)+'.png');
		$('#banner'+ ($(this).index()+1) +' a .jump').css('border-color','gray');
	});
}
