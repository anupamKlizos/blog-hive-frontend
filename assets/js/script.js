$(".category-slider").owlCarousel({
    items: 3,
    loop: false,
    margin: 45,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
    responsive: {
      0: {
          items: 1,
          margin: 20
      },
      700: {
          items: 2,
          margin: 20
      },
      1200: {
        items: 4,
        margin: 20
      },
      1400: {
        items: 4,
        margin: 20
    }
  }

});


$(".blog-slider").owlCarousel({
  items: 3,
  loop: false,
  margin: 45,
  nav: true,
  dots: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
  responsive: {
    0: {
        items: 1,
        margin: 20
    },
    700: {
        items: 2,
        margin: 20
    },
    1200: {
      items: 4,
      margin: 20
    },
    1400: {
      items: 4,
      margin: 20
  }
}

});




const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});