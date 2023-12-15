const swiper = new Swiper('#main-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 1000,
    fadeEffect: { 
        crossFade: true 
        },
    observer: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction : false,
    },
    loopAdditionalSlides : 1,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const swiper_brand = new Swiper('#special-items', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    observer: true,
    centeredSlides: true,
  
    navigation: {
      nextEl: '#sp-next',
      prevEl: '#sp-prev',
    },
  });
  const newsSwiper = new Swiper('#news-slider', {
    // Optional parameters
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides : 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '#news-next-btn',
      prevEl: '#news-prev-btn',
    },
  });