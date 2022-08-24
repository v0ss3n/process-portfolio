$(".tabs-wrapper").each((a, tabsWrapperEl) => {
  const $tabsWrapperEl = $(tabsWrapperEl);
  $tabsWrapperEl.find(".tab__title").each((i, titleWrapperEl) => {
    const $title = $(titleWrapperEl);
    $title.on("click", () => {
      $tabsWrapperEl.find(".tab__content").hide();

      $tabsWrapperEl
        .find(".tab__content")
        .eq(i)
        .show();

      $tabsWrapperEl
        .find(".tab__title--active")
        .removeClass("tab__title--active");

      $title.toggleClass("tab__title--active");
    });
  });
});

$(document).ready(function() {
  $(".photoshoot").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true
  });

  if (window.matchMedia("(min-width: 768px)").matches) {
    $(".portfolio-images").slick({
      autoplay: true
    });
  }

  $(".lookwrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true
  });

  $(".look__specs-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".moulage-carousel1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2700
  });

  $(".moulage-carousel2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".moulage-carousel3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500
  });

  $(".moulage-carousel4").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3100
  });
});

var firstScene = document.getElementById("first-scene");
if (firstScene) {
  var firstParallax = new Parallax(firstScene);
}

var secondScene = document.getElementById("second-scene");
if (secondScene) {
  var secondParallax = new Parallax(secondScene);
}

var thirdScene = document.getElementById("third-scene");
if (thirdScene) {
  var thirdParallax = new Parallax(thirdScene);
}

var fourthScene = document.getElementById("fourth-scene");
if (fourthScene) {
  var fourthParallax = new Parallax(fourthScene);
}

var fifthScene = document.getElementById("fifth-scene");
if (fifthScene) {
  var fifthParallax = new Parallax(fifthScene);
}

var sixthScene = document.getElementById("sixth-scene");
if (sixthScene) {
  var sixthParallax = new Parallax(sixthScene);
}

var moulageScene1 = document.getElementById("moulage-scene1");
if (moulageScene1) {
  var moulageParallax1 = new Parallax(moulageScene1);
}

var moulageScene2 = document.getElementById("moulage-scene2");
if (moulageScene2) {
  var moulageParallax2 = new Parallax(moulageScene2);
}

var moulageScene3 = document.getElementById("moulage-scene3");
if (moulageScene3) {
  var moulageParallax3 = new Parallax(moulageScene3);
}

var moulageScene4 = document.getElementById("moulage-scene4");
if (moulageScene4) {
  var moulageParallax4 = new Parallax(moulageScene4);
}

var moulageScene5 = document.getElementById("moulage-scene5");
if (moulageScene5) {
  var moulageParallax5 = new Parallax(moulageScene5);
}

var moulageScene6 = document.getElementById("moulage-scene6");
if (moulageScene6) {
  var moulageParallax6 = new Parallax(moulageScene6);
}

var moulageScene7 = document.getElementById("moulage-scene7");
if (moulageScene7) {
  var moulageParallax7 = new Parallax(moulageScene7);
}

var moulageScene8 = document.getElementById("moulage-scene8");
if (moulageScene8) {
  var moulageParallax8 = new Parallax(moulageScene8);
}

// jQuery(document).ready(function(){
//   $(window).scroll(function(e){
//   	parallaxScroll();
// 	});

// 	function parallaxScroll(){
// 		var scrolled = $(window).scrollTop();
// 		$('#parallax-bg-1').css('top',(0-(scrolled*.25))+'px');
// 		$('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
// 		$('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
// 	}

//  });

function toggleVisibility1() {
  var x = document.getElementById("look__process1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility2() {
  var x = document.getElementById("look__process2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility3() {
  var x = document.getElementById("look__process3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility4() {
  var x = document.getElementById("look__process4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility5() {
  var x = document.getElementById("look__process5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility6() {
  var x = document.getElementById("look__process6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility7() {
  var x = document.getElementById("look__process7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility8() {
  var x = document.getElementById("look__process8");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleVisibility9() {
  var x = document.getElementById("look__process9");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(".phone-button").each((i, buttonEl) => {
  const $buttonEl = $(buttonEl);
  $buttonEl.on("click", () => {
    const $lookswrapper = $(".show-looks");
    const $target = $lookswrapper.find(".show-look").eq(i);

    $lookswrapper
      .find(".show-look")
      .hide()
      .removeClass(".show-look--active");
    $target.show().addClass("show-look--active");

    $("html, body").animate(
      {
        scrollTop: $target.offset().top
      },
      700
    );
  });
});

$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

// function showTime() {
//   var date = new Date();
//   var h = date.getHours(); // 0 - 23
//   var m = date.getMinutes(); // 0 - 59
//   var s = date.getSeconds(); // 0 - 59
//   var session = "AM";

//   if (h == 0) {
//     h = 12;
//   }

//   if (h > 12) {
//     h = h - 12;
//     session = "PM";
//   }

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   var time = h + ":" + m + ":" + s + " " + session;
//   document.getElementById("MyClockDisplay").innerText = time;
//   document.getElementById("MyClockDisplay").textContent = time;

//   setTimeout(showTime, 1000);
// }

// showTime();
