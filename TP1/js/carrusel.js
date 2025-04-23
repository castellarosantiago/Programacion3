document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hero-carousel img");
    const prev = document.querySelector(".carousel-btn.left");
    const next = document.querySelector(".carousel-btn.right");
  
    let current = 0;
    images[current].classList.add("active");
  
    const showSlide = (index) => {
      images.forEach((img) => img.classList.remove("active"));
      images[index].classList.add("active");
    };
  
    prev.addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    });
  
    next.addEventListener("click", () => {
      current = (current + 1) % images.length;
      showSlide(current);
    });
  });
  