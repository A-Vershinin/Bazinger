

/*Подключение слайдера */
jQuery(document).ready(function($) {
	$('.slaider').unslider({
		// autoplay:true,
		arrows:false
		});
	$('.reviews').unslider({
		// autoplay:true,
		arrows:false
		});
});




// воспроизводим видео по клику
var handler = function () {
	this.innerHTML = '<iframe width="640" height="360"  src="https://www.youtube.com/embed/Q8v2WIvEJ3c" frameborder="0" border="0" allowfullscreen></iframe>;'};
document.querySelector(".video__icon").addEventListener('click', function (e) {
	this.removeEventListener('click', handler, false); handler.apply(this, arguments);
 } , false);
