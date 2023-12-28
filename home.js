const button = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
const before = document.querySelector('.before')
const after = document.querySelector('.after')
const socmed = document.querySelector('.socmed')

button.addEventListener('click', function(){
    mobile_menu.classList.toggle('is-active');
    before.classList.toggle('is-active');
    after.classList.toggle('is-active');
    socmed.classList.toggle('is-active');
})
document.querySelector(".carousel-control-next-icon").style.backgroundImage = "url(./media/right.svg)";
document.querySelector(".carousel-control-prev-icon").style.backgroundImage = "url(./media/left.svg)";

const info = document.querySelector('.char-info')
const close = document.querySelector('.close')

close.addEventListener('click', function(){
    info.classList.remove('is-active');
    lamba.classList.remove('active');
    leshya.classList.remove('active');
    heketa.classList.remove('active');
    kallamara.classList.remove('active');
    shamuraa.classList.remove('active');
    narindera.classList.remove('active');
})

const lamb = document.querySelector('.lamb')
const lamba = document.querySelector('.lamba')
lamb.addEventListener('click', function(){
    info.classList.toggle('is-active');
    lamba.classList.toggle('active');

})

const leshy = document.querySelector('.leshy')
const leshya = document.querySelector('.leshya')
leshy.addEventListener('click', function(){
    info.classList.toggle('is-active');
    leshya.classList.toggle('active');
})

const heket = document.querySelector('.heket')
const heketa = document.querySelector('.heketa')
heket.addEventListener('click', function(){
    info.classList.toggle('is-active');
    heketa.classList.toggle('active');
})

const kallamar = document.querySelector('.kallamar')
const kallamara = document.querySelector('.kallamara')
kallamar.addEventListener('click', function(){
    info.classList.toggle('is-active');
    kallamara.classList.toggle('active');
})

const shamura = document.querySelector('.shamura')
const shamuraa = document.querySelector('.shamuraa')
shamura.addEventListener('click', function(){
    info.classList.toggle('is-active');
    shamuraa.classList.toggle('active');
})

const narinder = document.querySelector('.narinder')
const narindera = document.querySelector('.narindera')
narinder.addEventListener('click', function(){
    info.classList.toggle('is-active');
    narindera.classList.toggle('active');
})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

window.addEventListener("load", (event) => {
    document.querySelector("#myaudio").autoplay;
});

$(window).on("load", function(){
    $(".plays .bi-play-fill").on("click", function(){
        $(this).hide();
        $(".bi-play").fadeIn();
        $("#myaudio")[0].play()
    })
    $(".plays .bi-play").on("click", function(){
        $(this).hide();
        $(".bi-play-fill").fadeIn();
        $("#myaudio")[0].pause()
    })
})
