$(function(){
// Fixed heaer
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

chekScroll(scrollPos, introH);

$(window).on("scroll resize", function(){
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop()

  chekScroll(scrollPos, introH);

});
function chekScroll(scrollPos, introH){
  if( scrollPos > introH ){
    header.addClass("fixed");
  } else{
    header.removeClass("fixed");
  }
}


// Smooth scroll

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOfset =  $(elementId).offset().top;

    nav.removeClass("show");

        $("html, body").animate({
          scrollTop: elementOfset -50
        }, 900);
    });


// Nav Toggle
let nav = $("#nav");
let navToggle = $("#navToggle");
      navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews//
let slider = $("#reviewsSlider");

slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

VANTA.CELLS({
  el: "#intro.intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  color: 1,
  scaleMobile: 1.00
  
})































































































































});
