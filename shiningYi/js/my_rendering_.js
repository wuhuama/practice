var swiper = new Swiper('.swiper-container',{
	pagination: '.swiper-pagination',
	autoplay: 3000,
	paginationClickable : true,
	effect: 'fade',
	loop: true,
	paginationBulletRender:function(index,className){
		return '<span class="'+className+'"></span>'
	}
});

//for (var i = 0; i < 85; i ++) {
//	var r = random(0, 85);
//	$('#imgs').append('<li id="li'+i+'" style="border: 1px solid #ccc"></li>');
//	var h = random(100, 400);
//
//	$('#li'+i+'').css({'height':h, 'backgroundImage':'url(img/rendering/images/'+r+'.jpg)','backgroundSize':'100% 100%'});
//	
//}


//瀑布流布局
//随机数的方法
function random(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
}
var center = document.getElementById('center_imgs');	
var ulImage = document.getElementById('ulImg');
var colHeights = [];// 每一列高度的数组
var heights = []; // 所有li高度的数组
var maxHeight = 0;
function setLi (isFirst) {
	var lis = ulImage.getElementsByTagName('li');
	// 确定页面的列数
	var sightWidth = document.documentElement.clientWidth;
	if(sightWidth > 640){
		cols = 4;
		var width = 24.3;
		var rightMargin = 0.5;
	}else{
		cols = 2;
		var width = 48;
		var rightMargin = 1;
	}
	// 设置ul的宽度
	ulImage.style.width = cols * (width + rightMargin) + '%';
	for (var i = 0; i < cols; i ++) {
		colHeights[i] = 0;
	}
	
	function createLi (index) {
		// 创建li 
		var li = lis[index] || document.createElement('li');
		li.innerHTML = '<img src="img/rendering/images/'+ (random(1,85)) +'.jpg" class="tp"/>';
//		var h = random(100,400);
//		li.style.height = h + 'px';
		li.style.width = width + '%';
		
		var h = li.offsetHeight;
//		alert(h);
		// li应该添加到哪一列
		
		isFirst && heights.push(h);
		
		// 寻找最矮的列和它所在的下标
		var minCol = colHeights[0];
		maxHeight = colHeights[0];
		var minIndex = 0;
		for (var i = 0; i < cols; i ++) {
			if (minCol > colHeights[i]) {
				minCol = colHeights[i];
				minIndex = i;
			}
		}
		for (var i = 0; i < cols; i ++) {
			if (maxHeight < colHeights[i]) {
				maxHeight = colHeights[i];
			}
		}
	
		
		// 设置li相对于ul的top、left
		li.style.top = minCol + 'px';
		li.style.left = minIndex * (width + rightMargin) + '%';
		
		colHeights[minIndex] += (h + 5);
		
		isFirst && ulImage.appendChild(li);
		
		var imgbg;
		var imgfd;
		lis[index].onmouseenter = function(){
			imgfd = document.createElement('img');
			imgbg = document.createElement('img');
			imgbg.src = 'img/QQ图片20160719181658.jpg';
			imgbg.className = 'mask';
			
			imgfd.src = 'img/rendering/images/fangda.png';
			imgfd.className = 'maginifier';
			imgfd.style.top = (this.offsetHeight / 2 - 15) + 'px';
			imgfd.style.left = (this.offsetWidth / 2 - 15) + 'px';
			
			this.appendChild(imgfd);
			this.appendChild(imgbg);
			
		}
		lis[index].onmouseleave = function(){
			this.removeChild(imgbg);
			this.removeChild(imgfd);
		}
	}
	
	for (var i = 0; i < 84; i++) {
		createLi(i);
	}
	
//	alert(maxHeight);
	ulImage.style.height = (maxHeight + 50) + 'px';
}
setLi(true);


window.onresize = function () {
	setLi(false);
}
window.onscroll = function () {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop < 100){
		setLi(false);
	}
}
