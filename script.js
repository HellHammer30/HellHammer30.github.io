//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top="-50px";
    } else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});
// TYPED
var typed = new Typed('.typed', {
    strings: ['<strong>en reconversion</strong>', '<strong> Un Fast Learner</strong>',
     '<strong>Un Autodidacte</strong>',
    'aussi <strong>prêt</strong> à rejoindre votre équipe pour démarrer mon <strong>alternance d\'un an avec OpenClassrooms</strong> et devenir <strong>développeur web</strong>, pour apprendre ce métier qui me passione et dans lequel je pourrai m\'épanouir.'],
    typeSpeed: 25,
    backSpeed: 10,
    smartBackspace: true, // this is a default
    loop: true
  });
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function(){

const top = $('.counter').offset().top - window.innerHeight;

if(compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
        let $this = $(this),
        countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum : countTo
    },
    {
      duration: 1500,
      easing: 'swing',
      step: function() {
          $this.text(Math.floor(this.countNum));
      },
      complete: function() {
          $this.text(this.countNum);
      }  
    });
    });
    compteur = 1;
    }
});

//AOS
  AOS.init();
