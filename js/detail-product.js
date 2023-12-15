// detail-product.js

function hideAllDetails() {
  var detailElements = document.querySelectorAll(".product-detail");
  detailElements.forEach(function (element) {
    element.style.display = "none";
  });
}

function showDetail(productId) {
  hideAllDetails(); 

  var detailElement = document.getElementById("detail-" + productId);

  if (detailElement) {
    detailElement.style.display = "block"; // Show the specific detail
  }
}

document
  .getElementById("detail-link-1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showDetail(1);
  });

document
  .getElementById("detail-link-2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showDetail(2);
  });

document
  .getElementById("detail-link-3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showDetail(3);
  });

document
  .getElementById("detail-link-4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showDetail(4);
  });

document
  .getElementById("detail-link-5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showDetail(5);
  });

document
  .getElementById("detail-link-6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showDetail(6);
  });

document.addEventListener("DOMContentLoaded", function () {
  hideAllDetails();
});
