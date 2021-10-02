$(function () {
	'use strict';
var winH  =$(window).height(),
	hearerBarH=$('.headerBar').innerHeight(),
	navH      =$('.navbar').innerHeight();
  $('.slider,.carousel-item').height(winH-(hearerBarH+navH)); 
 // shuffle
 $('.featured-work ul li').on('click',function(){
 $(this).addClass('active').siblings().removeClass('active');
 if($(this).data('class')==='all'){
 	$('.shuffle-imgs .col-md').css('opacity',1);
 }
 else {
 	$('.shuffle-imgs .col-md').css('opacity','.09');
    $($(this).data('class')).parent().css('opacity',1); 
 }
 });
 
 const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

$(document).ready(function() {

$('.counter').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 4000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});

});

});

