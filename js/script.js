// script.js

function handleResponsive() {
  const exploreLink = document.getElementById("explore-link");
  const scrollProduct = document.querySelector(".scroll-product");
  if (window.innerWidth <= 600) {
    scrollProduct.textContent = "EXPLORE";
  } else {
    scrollProduct.textContent = "EXPLORE OUR PRODUCTS";
  }
}
window.addEventListener("resize", handleResponsive);
handleResponsive();

//     Script Homepage
// JS SCRIPT.JS

document.addEventListener("DOMContentLoaded", function () {
  var learnMoreButtons = document.querySelectorAll(
    ".learn-more, .learn-more2, .learn-more3, .learn-more4"
  );
  learnMoreButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      alert("Learn more clicked!");
    });
  });

  window.addEventListener("resize", function () {
    toggleClassBasedOnWindowSize();
  });

  toggleClassBasedOnWindowSize();

  function toggleClassBasedOnWindowSize() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
      document.body.classList.add("small-screen");
    } else {
      document.body.classList.remove("small-screen");
    }
  }

  var menuToggle = document.querySelector(".menu-toggle");
  var navBar = document.querySelector(".nav-bar");

  if (menuToggle && navBar) {
    menuToggle.addEventListener("click", function () {
      navBar.classList.toggle("show-menu");
    });
  }

  var sliderImages = document.querySelectorAll(".slider img");
  var currentSlide = 0;
  function showSlide(index) {
    sliderImages.forEach(function (image) {
      image.style.display = "none";
    });
    sliderImages[index].style.display = "block";
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
  }
  setInterval(nextSlide, 5000);
});
