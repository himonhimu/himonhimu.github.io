$(document).ready(function(){


function navfun() {
    var menu = document.getElementById('#menubar');
    $(window).on("scroll", function(){
       // console.log(scrollY);
        if (scrollY>60) {
           
            $('#menubar').addClass('navchange');
        } else {
            $('#menubar').removeClass('navchange');
        }
        if (scrollY>3200) {
            animatefunction();
        }
    })
}
navfun();

$(window).on("scroll", function(){
    // console.log(scrollY);
     if (scrollY>3100) {
        
        animatefunction();
        //console.log(scrollY);
     }
 })

for (let index = 0; index < 130; index++) {
   // console.log(index);
    $('#dotsjs').append('<div class="property"></div>');
    $('#dotsab').append('<div class="dotsabout"></div>');
    
}
function animatefunction(){
    const counters = document.querySelectorAll('.clickme');
var speed = 95;
var text = 0;
counters.forEach(counter =>{
    const updateCount  = () =>{
        var x = +counter.getAttribute('data-target');
         text = +counter.innerText;
        // console.log(x);
        var inc = Math.round(x/speed);
        if (text <x) {
            counter.innerText = text+inc;
            setTimeout(updateCount, 1)
        } else {
            counter.innerText = x;   
            
        }

    }
     updateCount();
     
})
}


    
})