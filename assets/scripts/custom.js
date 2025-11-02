[].forEach.call(document.querySelectorAll('.myimg'), function(elem) {
	var img = new Image();
	img.onload = function(event) {
  	elem.previousElementSibling.getContext('2d').drawImage(img, 0, 0);
	};
  img.src = elem.getAttribute('data-src');
  
	elem.onmouseover = function(event) {
		event.target.src = event.target.getAttribute('data-src');
	};
	elem.onmouseout = function(event) {
		event.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
	};
});

$(document).ready(function(){

$('.responsive').slick({
    centerMode: true,
//   centerPadding: '60px',
//   adaptiveHeight: true,
//   autoplay: true,
//   speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
				
});