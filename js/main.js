// Initiate the wowjs
new WOW().init();


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});


// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});



// Typed Initiate
if ($('.hero .hero-text h2').length == 1) {
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}

(jQuery);


// ============== SETRVICES SECTION READMORE BUTTON ====================
const servicesBtn1 = document.getElementById('serviceBtn1');
const servicesText1 = document.querySelector('.services-box p .moreText1');

servicesBtn1.addEventListener('click', () => {
  servicesText1.classList.toggle('show');
  servicesBtn1.textContent = servicesText1.classList.contains('show') ? 'Read Less' : 'Read More';
});

const servicesBtn2 = document.getElementById('serviceBtn2');
const servicesText2 = document.querySelector('.services-box p .moreText2');

servicesBtn2.addEventListener('click', () => {
  servicesText2.classList.toggle('show');
  servicesBtn2.textContent = servicesText2.classList.contains('show') ? 'Read Less' : 'Read More';
});

const servicesBtn3 = document.getElementById('serviceBtn3');
const servicesText3 = document.querySelector('.services-box p .moreText3');

servicesBtn3.addEventListener('click', () => {
  servicesText3.classList.toggle('show');
  servicesBtn3.textContent = servicesText3.classList.contains('show') ? 'Read Less' : 'Read More';
});