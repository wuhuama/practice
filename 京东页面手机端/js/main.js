var swiper1 = new Swiper('.swiper-container1',{
	pagination: '.swiper-pagination1',
	autoplay : 2000,
});
var swiper2 = new Swiper('.swiper-container2',{
	pagination: '.swiper-pagination2',
	autoplay : 2000,
});
var swiper3 = new Swiper('.foods',{
	autoplay : 2000,
	slidesPerView: 4,
});

var toTop = document.getElementById('toTop');
var bg = document.getElementById('bg_bar');
var speed = 0;
window.onscroll = function (){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop < 70){
		speed = 0;
	}else{
		speed += 0.01;
			if(speed >= 1){
			speed = 1;
		}
	}
	bg.style.opacity = speed;
	
	if (scrollTop > 0) {
		toTop.style.opacity = 1;
		toTop.style.filter = 'alpha(opacity=100)';
	} else {
		toTop.style.opacity = 0;
		toTop.style.filter = 'alpha(opacity=0)';
	}
	toTop.onclick = function (){
		var b = scrollTop;
		var c = -scrollTop;
		var t = 0;
		var d = 10;
		var ID = setInterval(function () {
			t ++;
			if (t >= d) {
				clearInterval(ID);
			}
			if (document.body.scrollTop) {
				document.body.scrollTop = Tween.Linear(t,b,c,d); 
			} else{
				document.documentElement.scrollTop = Tween.Linear(t,b,c,d);
			}
		}, 30);
	}
	
	
}
