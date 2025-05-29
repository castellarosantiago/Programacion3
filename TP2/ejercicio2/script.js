let getElementById = document.getElementById('inputText');
let button = document.getElementById('btn');
let ul = document.getElementById('list');

button.addEventListener('click', () => {
    let inputValue = getElementById.value;
    if (inputValue.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = inputValue;

        // Crear botón de eliminar
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.marginLeft = '10px';

        // Agregar evento al botón de eliminar
        deleteButton.addEventListener('click', () => {
            li.remove(); // Elimina el <li> correspondiente
            localStorage.setItem('listItems', ul.innerHTML); // Actualiza el almacenamiento local
        });

        li.appendChild(deleteButton); // Agregar el botón al <li>
        ul.appendChild(li); // Agregar el <li> a la lista
        getElementById.value = '';
        localStorage.setItem('listItems', ul.innerHTML); // Guardar en localStorage
    }
});

window.addEventListener('load', () => {
    let savedItems = localStorage.getItem('listItems');
    if (savedItems) {
        ul.innerHTML = savedItems;

        // Volver a agregar los eventos a los botones de eliminar
        let deleteButtons = ul.querySelectorAll('button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                let li = event.target.parentElement;
                li.remove(); // Elimina el <li> correspondiente
                localStorage.setItem('listItems', ul.innerHTML); // Actualiza el almacenamiento local
            });
        });
    }
});