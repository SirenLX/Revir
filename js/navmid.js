//function a(c, b, d){
//	c = 1;
//	b = c;
//	d = b;
//	return d;
//}a();

/*eslint-env browser*/

$(function () {

    $(".profilepic").addClass('animated jackInTheBox');
    
    $(".navbar-brand").addClass('animated slideInDown');
    
    $(".overlay1").addClass('animated slideInDown');

    setTimeout(function() { // animate logo tagline
        $('.subtxt').show().addClass('animated jackInTheBox');
    }, 500);

});