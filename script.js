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
   window.open('/QR_Code/index.html', '_self'); // Opens in the same window
}

  function openUnit() {
    window.open('Unit_Converter/index.html', '_self'); // Opens in the same window
}

  function openResize() {
    window.open('https://resize.itdata.ge', '_blank'); // Opens in a new tab
}

  function openSubnet() {
    window.open('https://subnet.itdata.ge', '_blank'); // Opens in a new tab
}

  function openText() {
    window.open('https://text.itdata.ge', '_blank'); // Opens in a new tab
}

  function openPassword() {
    window.open('https://password.itdata.ge', '_blank'); // Opens in a new tab
}

function openNtp() {
  window.open('https://time.itdata.ge', '_blank'); // Opens in a new tab
}

function openDwn() {
  window.open('https://blog.itdata.ge', '_blank'); // Opens in a new tab
}


