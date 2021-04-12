const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    
    1800: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  } ,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

  
});

const recommended_swiper = new Swiper('.recommended-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    
    1600: {
      slidesPerView: 3
    },
    
    1100: {
      slidesPerView: 2
    },
    
  } ,
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

  
});

const recommendation_swiper = new Swiper('.recommendation-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    
    1800: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  } ,
  // Navigation arrows
  navigation: {
    nextEl: '.recommendation-button-next',
    prevEl: '.recommendation-button-prev',
  },

  
});

const searchBtn = document.querySelector ('.mobile-search');
const mobileSearch = document.querySelector ('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if(document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  recommended_swiper.destroy();
  recommendation_swiper.destroy();

}