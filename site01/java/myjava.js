$(document).ready(function() {
  function clickScrolling() {
    //var top = offset().top;
    $('.js-button')
      .eq(0)
      .click(() => {
        $('html, body').animate(
          {
            scrollTop:
              $('.jssec')
                .eq(0)
                .offset().top - 65
          },
          1000
        );
        //console.log(top);
        menufunction();
      });
    $('.js-button')
      .eq(1)
      .click(() => {
        $('html, body').animate(
          {
            scrollTop:
              $('.jssec')
                .eq(1)
                .offset().top - 60
          },
          1000
        );
        menufunction();
      });
    $('.js-button')
      .eq(2)
      .click(() => {
        $('html, body').animate(
          {
            scrollTop:
              $('.jssec')
                .eq(2)
                .offset().top - 60
          },
          1000
        );
        menufunction();
      });
    $('.js-button')
      .eq(3)
      .click(() => {
        $('html, body').animate(
          {
            scrollTop:
              $('.jssec')
                .eq(3)
                .offset().top - 60
          },
          1000
        );
        menufunction();
      });
    $('.js-button')
      .eq(4)
      .click(() => {
        $('html, body').animate(
          {
            scrollTop:
              $('.jssec')
                .eq(4)
                .offset().top - 60
          },
          1000
        );
        menufunction();
      });
    $('.js-button')
      .eq(5)
      .click(() => {
        $('html, body').animate(
          {
            scrollTop:
              $('.jssec')
                .eq(5)
                .offset().top - 60
          },
          1000
        );
        menufunction();
      });
  }

  home.style.boxShadow = 'inset 0px -5px 0px 0px #3EC483';

  function myfunction() {
    $(window).scroll(function() {
      var positiontop, firstsecposition, secondsecposition;
      var thirdsecposition,
        fourthsecposition,
        fifthsecposition,
        sixthsecposition;
      var home, services, porfolio, testimony, pricing, blog;

      positiontop = $(document).scrollTop();
      firstsecposition = $('#one').position();
      secondsecposition = $('#two').position();
      thirdsecposition = $('#three').position();
      fourthsecposition = $('.fourthsec').position();
      fifthsecposition = $('.fifthsec').position();
      sixthsecposition = $('.blogsec').position();

      // var positionok = firstsecposition-positiontop;
      var a = 0;
      // b = secondsecposition.top -positiontop;
      // c = thirdsecposition.top -positiontop;
      //console.log(firstsecposition.top);
      //console.log(">>scroll position "+b+ " >> c "+c);
      //console.log (a + ">>" +b +">>"+c);
      home = document.getElementById('home');
      services = document.getElementById('services');
      porfolio = document.getElementById('porfolio');
      testimony = document.getElementById('testimony');
      pricing = document.getElementById('pricing');
      blog = document.getElementById('blog');

      if (a == 0 || positiontop < secondsecposition.top) {
        home.style.boxShadow = 'inset 0px -5px 0px 0px #3EC483';
        services.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        porfolio.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        testimony.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        pricing.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        blog.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';

        a += positiontop;
        //console.log(a);
      }

      if (
        a >= secondsecposition.top - 70 ||
        positiontop > thirdsecposition.top
      ) {
        a = 0;
        //alert(b);
        home.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        services.style.boxShadow = 'inset 0px -5px 0px 0px #3EC483';
        porfolio.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        testimony.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        pricing.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        blog.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        a += positiontop;
        // console.log(a);
      }
      if (
        a >= thirdsecposition.top - 70 ||
        positiontop > fourthsecposition.top
      ) {
        a = 0;
        //alert(b);
        home.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        services.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        porfolio.style.boxShadow = 'inset 0px -5px 0px 0px #3EC483';
        testimony.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        pricing.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        blog.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        a += positiontop;
        // console.log('sectop >>' + thirdsecposition.top);
        // console.log(a);
      }
      if (
        a >= fourthsecposition.top - 90 ||
        positiontop > fifthsecposition.top
      ) {
        a = 0;
        //alert(b);
        home.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        services.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        porfolio.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        testimony.style.boxShadow = 'inset 0px -5px 0px 0px #3EC483';
        pricing.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        blog.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        a += positiontop;
        // console.log('sectop >>' + thirdsecposition.top);
        // console.log(a);
      }

      if (
        a >= fifthsecposition.top - 90 ||
        positiontop > sixthsecposition.top
      ) {
        a = 0;
        //alert(b);
        home.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        services.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        porfolio.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        testimony.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        pricing.style.boxShadow = 'inset 0px -5px 0px 0px #3EC483';
        blog.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        a += positiontop;
        // console.log('sectop >>' + thirdsecposition.top);
        // console.log(a);
      }
      if (a >= sixthsecposition.top - 90) {
        a = 0;
        //alert(b);
        home.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        services.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        porfolio.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        testimony.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        pricing.style.boxShadow = 'inset 0px 0px 0px 0px #3EC483';
        blog.style.boxShadow = 'inset 0px -5px 0px 0px #3EC483';
        a += positiontop;
        // console.log('sectop >>' + thirdsecposition.top);
        // console.log(a);
      }
    });
  }
  myfunction();
  clickScrolling();
  var toggle = document.getElementById('togglebutton');
  var menushow = document.getElementById('mymenu');
  var displaywidth = screen.width;
  function menufunction() {
    if (displaywidth < 500) {
      displaywidth = screen.width;
      menushow.style.display = 'none';
      console.log(displaywidth);
    } else {
      displaywidth = screen.width;
      menushow.style.display = 'block';
      console.log(displaywidth);
    }
  }

  toggle.addEventListener('click', () => {
    if (menushow.style.display === 'none') {
      menushow.style.display = 'block';
    } else if (menushow.style.display === '') {
      menushow.style.display = 'block';
    } else {
      menushow.style.display = 'none';
    }
  });
});
