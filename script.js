const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu when the nav link
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

//Initialize Swipper
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameter
    loop: true,
  spaceBetween: 25,
    slidePreview:1,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
  },

  // Navigation arrows
   navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  //Responsive breakpoints
    breakpoints: {
        768: {
            slidesPerView: 2, // Show 2 slides on medium screens
        },
        1024: {
            slidesPerView: 3, // Show 3 slides on large screens
        }
  },
    centeredSlides: true,  // Fix blank issue on loop
    loopAdditionalSlides: 3,  // Preload extra slides to avoid empty gaps
    watchOverflow: true,  // Prevent issues when fewer slides than needed
});