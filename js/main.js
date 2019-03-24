$(document).ready(function () {

   // Menu-toggle button
   $(".hamburger-menu").on("click", function () {
      $("nav ul").toggleClass("showing");
      //Hamburger animate
      $(this).toggleClass('animate');
   });

   // Slider 
   $('.slides').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false
   });

   // Smooth scroll
   $('.main-header a').smoothScroll({
      offset: -94,
      speed: 1000,
      afterScroll: function () {
         $(this).closest('.main-header').find('a').removeClass('active');
         $(this).addClass('active');
      }
   });

   // Navigation arrows
   // visible arrows
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.nav-arrows').fadeIn();
      } else {
         $('.nav-arrows').fadeOut();
      }
   });

   // click event to scroll top
   $(".arrow-up").click(function () {
      $('html, body').animate({
         scrollTop: 0
      }, 600);
   });

   // click event to scroll bottom
   $('.arrow-down').click(function () {
      $('html, body').animate({
         scrollTop: $(document).height()
      }, 1500);
   });

});

// Scrolling Effect
$(window).on("scroll", function () {
   if ($(window).scrollTop()) {
      $('nav').addClass('black');
   } else {
      $('nav').removeClass('black');
   }
});

// Cookies
$(document).ready(function () {
   cookiesBanner();

   function cookiesBanner() {
      // Check cookie 
      if ($.cookie('yourCookieName') != "active") $('#cookies').show();
      //Assign cookie on click
      $('#button-cookie').on('click', function () {
         $.cookie('yourCookieName', 'active', {
            expires: 1
         }); // cookie will expire in one day
         $('#cookies').fadeOut();
      });
   }
});