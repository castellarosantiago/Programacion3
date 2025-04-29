const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const input = document.getElementById("form-button");

// Crea un li con el texto ingresado por el usuario
formulario.addEventListener("click", function(e){
    e.preventDefault();
    
    const inputUsuario = input.value.trim();
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = inputUsuario;
    lista.appendChild(nuevoLi);

// Marca como completadas las tareas donde el usuario haga click
    lista.addEventListener("click", (e) => {
        e.target.classList.add("completado");
    });
    
});


