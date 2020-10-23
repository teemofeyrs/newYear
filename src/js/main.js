import './../bootstrap/bootstrap'
import './../css/style.scss'
import './../css/media.css'
import 'scrollit'
import './glider.min'
import './counter'

//scroll it lib
$(function(){
    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 500,       // how long (in ms) the animation takes
    });


});

//slider
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
})


