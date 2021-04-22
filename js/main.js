
//Slider

const slide = document.getElementById('slide')
const images = ['work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg', 'work5.jpg', 'work6.jpg', 'work7.jpg']

addEventListener('load', () => {
  const fragment = document.createDocumentFragment()
  for (const image of images) {
    const img = document.createElement('IMG')
    img.setAttribute('src', `./img/${image}`)
    img.classList.add('slide__img')

    img.addEventListener('animationstart', (e) => {
      e.target.style.zIndex = 2
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.style.zIndex = 1
      } else {
        slide.firstElementChild.style.zIndex = 1
      }
    })

    img.addEventListener('animationend', (e) => {
      e.target.removeAttribute('style')
      e.target.classList.remove('slide__img--animate')
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.add('slide__img--animate')
      } else {
        slide.firstElementChild.classList.add('slide__img--animate')
      }
    })

    fragment.appendChild(img)
  }

  slide.appendChild(fragment)

  slide.firstElementChild.classList.add('slide__img--animate')
})




//OPEN & CLOSE MENU

$(document).ready(function () {

    $(".nav-icon").click(function () {
        $(".full-nav").addClass("open");

    });

    //Cuando se haga click en el .nav-icon, que es el menú hamburguesa, se agrega la class="open" que se creó sólo en el CSS y lo que le da es visibilidad al .full-nav

    $(".nav-close").click(function () {
        $(".full-nav").removeClass("open");

    });

    $(".nav2 ul").click(function () {
        $(".full-nav").removeClass("open");

    });

    //Cuando se haga click en el .nav2 (que es la equis) & ul (que el contenedor de los li de lis items del menú), se quita la class="open" que se creó sólo en el CSS y lo que le da es visibilidad al .full-nav

    //SCROLL DE NAVBAR

    $(window).scroll(function () {

        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }
    });

    

    //MAGNIFIC POP-UP (GALERÍA DE FOTOS)

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //FLICKITY (CARRUSEL FOTOS)

    var $carousel = $('.carousel').flickity({
        imagesLoaded: true,
        percentPosition: false,
        wrapAround: true,
        autoPlay: true,
        // groupCells: true,
        lazyLoad: 2,
    });


    //COUNTER
    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });



});


/*BACK TO TOP*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2top').fadeIn();
    } else {
        $('#back2top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});

$(document).ready(function(){
    $("#new-slider").owlCarousel({
        items:3,
        navigation:true,
        navigationText:["",""],
        autoPlay:true,

    });
});

