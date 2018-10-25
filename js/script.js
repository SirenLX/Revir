//function a(c, b, d){
//	c = 1;
//	b = c;
//	d = b;
//	return d;
//}a();

/*eslint-env browser*/


$(document).ready(function () {

    $("#expbtn").click(function(){

        $("#overlay").fadeOut();
        $(".overlay1").fadeOut();

        $(".movedown").animate({
            bottom: '-=30%',
        });

        $(".navmove").animate({
            top: '-=30%',
        });

        $(".navmove2").animate({
            top: '+=30%',
        });
    });
});

$(document).ready(function () {

    $("#revirbtn").click(function(){

        $("#overlay").fadeIn();
        $(".overlay1").fadeIn();

        $(".movedown").animate({
            bottom: '+=30%',
        });

        $(".navmove").animate({
            top: '+=30%',
        });

        $(".navmove2").animate({
            top: '-=30%',
        });
    });

});

$(function () {

    $(".unbold").addClass('animated fadeInUp');

    setTimeout(function() { // animate logo tagline
        $('.subheader').show().addClass('animated fadeInUp');
    }, 500);

    setTimeout(function() { // animate logo tagline
        $('.bbold').show().addClass('animated fadeInUp');
    }, 500);

    ScrollReveal().reveal('.row1img', { delay: 500 });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() + 400);
  });
});