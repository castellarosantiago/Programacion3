const h1ElementById = document.getElementById('tituloPrincipal');
if (h1ElementById) {
    h1ElementById.textContent = 'Texto cambiado';
}


const pElementsByClassName = document.getElementsByClassName('parrafo');
for (let i = 0; i < pElementsByClassName.length; i++) {
    pElementsByClassName[i].style.color = 'red'; 
}

const liQuerySelectorAll = document.querySelectorAll('li');
const textos = ['Indice 1', 'Indice 2', 'Indice 3',];

liQuerySelectorAll.forEach((li, index) => {
    if (index < textos.length) {
        li.textContent += ` - ${textos[index]}`; 
    }
});
