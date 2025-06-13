const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

function openQR() {
   window.open('https://qr.itdata.ge', '_self'); // Opens in the same window
}

function openUnit() {
    window.open('https://convert.itdata.ge/', '_self'); // Opens in the same window
}

function openResize() {
    window.open('https://resize.itdata.ge',  '_self'); // Opens in a new tab
}

function openSubnet() {
    window.open('https://subnet.itdata.ge',  '_self'); // Opens in a new tab
}

function openText() {
    window.open('https://text.itdata.ge', '_self'); // Opens in the same window
}

function openPassword() {
    window.open('https://password.itdata.ge', '_self'); // Opens in a new tab
}

function openUrl() {
  window.open('https://url.itdata.ge',  '_self'); // Opens in a new tab
}

function openDwn() {
  window.open('https://blog.itdata.ge',  '_self'); // Opens in a new tab
}

function goHome() {
  window.location.href = '/index.html';  // Replace with the path to your home page
}

function openCss() {
  window.open('https://css.itdata.ge',  '_self'); // Opens in a new tab
}

function openWeather() {
  window.open('https://weather.itdata.ge',  '_self'); // Opens in a new tab
}

function openJs() {
  window.open('https://js.itdata.ge',  '_self'); // Opens in a new tab
}


