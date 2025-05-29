const resaltarBtn = document.getElementById('resaltarBtn');
const ocultarBtn = document.getElementById('ocultarBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const parrafos = document.querySelectorAll('.parrafo');

resaltarBtn.addEventListener('click', () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.add('resaltado'); 
    });
});

ocultarBtn.addEventListener('click', () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('oculto'); 
    });
});

limpiarBtn.addEventListener('click', () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.remove('resaltado'); 
    });
});