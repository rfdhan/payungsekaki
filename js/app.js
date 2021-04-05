var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// const backToTopButton = document.querySelector("#back-top");

// window.addEventListener("scroll", scrollFunction);

// function scrollFunction () {
//   if (window.pageYOffset > 300){
//     if (!backToTopButton.classList.contains("btnEntrance")){
//       backToTopButton.classList.remove("btnExit");
//       backToTopButton.classList.add("btnEntrance");
//       backToTopButton.style.display = "block";
//     }
//   }
//   else{
//     if(backToTopButton.classList.contains("btnEntrance")){
//       backToTopButton.classList.remove("btnEntrance");
//       backToTopButton.classList.add("btnExit");
//       setTimeout(function(){
//       backToTopButton.style.display = "none";
//       }, 250);
//       backToTopButton
//     }
//   }
// }

// backToTopButton.addEventListener("click", backToTop);
// function backToTop(){
//   window.scrollTo (0, 0);
// }

// $('a[href*="#"]')
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function (event) {
//         // On-page links
//         if (
//             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//             &&
//             location.hostname == this.hostname
//         ) {
//             // Figure out element to scroll to
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             // Does a scroll target exist?
//             if (target.length) {
//                 // Only prevent default if animation is actually gonna happen
//                 event.preventDefault();
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000, 'easeInBack', function () {
//                     // Callback after animation
//                     // Must change focus!
//                     var $target = $(target);
//                     $target.focus();
//                     if ($target.is(":focus")) { // Checking if the target was focused
//                         return false;
//                     } else {
//                         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                         $target.focus(); // Set focus again
//                     };
//                 });
//             }
//         }
//     });

// popup phone
var toMesjid = document.querySelector('.toa-mesjid');
var pictPromoMobile = document.querySelector('.pictpromomobile');
var closePromo = document.querySelector('.closepromo')

toMesjid.addEventListener('click', function(){
pictPromoMobile.classList.add('pictmobile');
});
closePromo.addEventListener('click', function(){
pictPromoMobile.classList.remove('pictmobile');
});


