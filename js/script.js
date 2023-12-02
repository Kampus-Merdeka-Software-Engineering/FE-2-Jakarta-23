// script.js
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const flyInElement = document.querySelector(".fly-in-element");
  if (isElementInViewport(flyInElement)) {
    flyInElement.classList.add("active");
    // Uncomment the line below if you want the effect to trigger only once
    // window.removeEventListener('scroll', handleScroll);
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Trigger the animation on page load
handleScroll();
