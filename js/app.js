$("#myServicies").mouseenter(function(){
    $("#myServicies").addClass('open');
}).mouseleave(function(){
    $("#myServicies").removeClass('open');
});

// Smooth Scrolling To Internal Links With jQuery
// $(document).ready(function(){
//         $('a[href^="#"]').on('click',function (e) {
//             e.preventDefault();
//             var target = this.hash,
//             $target = $(target);
//             $('html, body').stop().animate({
//                 'scrollTop': $target.offset().top
//             }, 900, 'swing', function () {
//                 window.location.hash = target;
//             });
//         });
// });

$(document).ready(function(){
    $('.carousel').carousel();
});
