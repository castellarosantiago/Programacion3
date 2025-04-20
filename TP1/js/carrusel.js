const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let current = 0;

function mostrarSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
});
}

next.addEventListener('click', () => {
current = (current + 1) % slides.length;
mostrarSlide(current);
});

prev.addEventListener('click', () => {
current = (current - 1 + slides.length) % slides.length;
mostrarSlide(current);
});

mostrarSlide(current); // Mostrar el primero al cargar
