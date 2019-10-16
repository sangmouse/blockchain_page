$(window).scroll(function(event) {
	var scroll=$(window).scrollTop();
    if (scroll >= 10) {
        $('.header .navigation').addClass("active");
    } else {
        $('.header .navigation').removeClass("active");
    }

});
$('.owl-carousel.new').owlCarousel({
    loop:true,
    nav:true,
    margin:0,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.owl-carousel.timeline').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.chat .chat-btn').click(function(event) {
    $('.chat .frame').toggleClass('active');
});


// coundown timer
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)


    
// // slide ranger
var slider = $("#calculatorSlider");
var developerBtn = $("#developerBtn");
var corporateBtn = $("#corporateBtn");
var privateBtn = $("#privateBtn");
var reseller = $("#resellerEarnings");

var percentageBonus = 30; // = 30%
var license = {
corpo: {
active: true,
price: 319,
},
dev: {
active: false,
price: 149,
},
priv: {
active: false,
price: 79,
}
}

function calculate(price, value) {

reseller.text((Math.round(((percentageBonus - value) / 100 * price))) + '$')
}

function reset(price) {
slider.val(0);

reseller.text((Math.round((percentageBonus / 100 * price))) + '$');
}
developerBtn.on('click', function(e) {
license.dev.active = true;
license.corpo.active = false;
license.priv.active = false;
reset(license.dev.price)
});
privateBtn.on('click', function(e) {
license.dev.active = false;
license.corpo.active = false;
license.priv.active = true;
reset(license.priv.price);
});
corporateBtn.on('click', function(e) {
license.dev.active = false;
license.corpo.active = true;
license.priv.active = false;
reset(license.corpo.price);
});
slider.on("input change", function(e) {
if (license.priv.active) {
calculate(license.priv.price, $(this).val());
} else if (license.corpo.active) {
calculate(license.corpo.price, $(this).val());
} else if (license.dev.active) {
calculate(license.dev.price, $(this).val());
}
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$('.i-bar').click(function(event) {
    $('.sidebar').addClass('active');
});
$('.cl-bar').click(function(event) {
    $('.sidebar').removeClass('active');
});

// const data = [
//   { dateLabel: '2018 - 2019', title: 'World Travel Blockchain Research' },
//   // { dateLabel: 'February 2017', title: 'Planning' },
//   { dateLabel: 'Q3 2019', title: 'Start Build World Travel Blockchain' },
//   { dateLabel: 'Q4 2019', title: 'Reward Community Join Social WTB' },
//   { dateLabel: 'Jan 2020', title: 'WTB Public Exchange' },
//   { dateLabel: 'Feb 2020', title: 'Launch WTB App IOS & Android' },
//   { dateLabel: 'March 2020', title: 'Travel Quick With WTB Pay' }
//   //   { dateLabel: 'Q2 2020', title: '1 Million Users App WTB' },
//   // { dateLabel: 'Q3 2020', title: 'Free Travel With App WTB Pay' }
// ];

// new Vue({
//   el: '#app', 
//   data: {
//     steps: data,
//   },
//   mounted() {
//     var swiper = new Swiper('.swiper-container', {
//       //pagination: '.swiper-pagination',
//       slidesPerView: 4,
//       paginationClickable: true,
//       grabCursor: true,
//       paginationClickable: true,
//       nextButton: '.next-slide',
//       prevButton: '.prev-slide',
//     });    
//   }
// })
new WOW().init();