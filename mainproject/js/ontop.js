// script.js

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
  
    // Fade in button on scroll
    window.addEventListener("scroll", function() {
      if (window.scrollY > 500) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    });
  
    // Natural scroll to top
    scrollToTopButton.addEventListener("click", function() {
      scrollToTopNatural(1000); // Duration in milliseconds
    });
  });
  
  // Natural scroll function
  function scrollToTopNatural(duration) {
    const startingY = window.pageYOffset;
    const targetY = 0;
    const diffY = targetY - startingY;
    const startTime = performance.now();
  
    function cubicEaseInOut(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
  
    function step(timestamp) {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);
      const easedProgress = cubicEaseInOut(progress);
      window.scrollTo(0, startingY + diffY * easedProgress);
  
      if (currentTime < duration) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  