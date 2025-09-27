// get seach icon element
let search = document.querySelector("#search");
// get searchform box
let formContainer = document.querySelector(".form-container");
// get login icon element
let loginBtn = document.querySelector("#login");
// get close login icons
let closeBtn = document.querySelector("#close-btn");
// get  login form box
let loginForm = document.querySelector(".login-container");
// get menu-bar icon btn
let menuBtn = document.querySelector("#menu-bar");
// get navbar box
let navbar = document.querySelector(".navbar");
// gel all video button element
let vidBtn = document.querySelectorAll(".vid-btn");
// ====================================>
// default setting in window scroll
window.onscroll = () => {
  search.classList.remove("fa-times");
  formContainer.classList.remove("show");
  loginForm.classList.remove("show");
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("show");
};

// click on search icon
search.addEventListener("click", () => {
  search.classList.toggle("fa-times");
  formContainer.classList.toggle("show");
});

// click on user icon then show
loginBtn.addEventListener("click", () => {
  loginForm.classList.add("show");
});

// click on user icon then show and click close icon
closeBtn.addEventListener("click", () => {
  loginForm.classList.remove("show");
});

// click on menu icon
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("show");
});

// click on dot button
vidBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video_slider").src = src;
  });
});

// owl-courosel slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
