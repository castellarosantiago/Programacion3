document.getElementById("form-button").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    // Limpiar mensajes de error previos
    clearErrors();

    let isValid = true;

    // Validar nombre
    if (!validateName(name)) isValid = false;

    // Validar email
    if (!validateEmail(email)) isValid = false;

    // Validar edad
    if (!validateAge(age)) isValid = false;

    // Si todo es válido, enviar el formulario
    if (isValid) {
        showSuccessMessage("Formulario enviado correctamente.");
    }
});

// Función para limpiar errores
function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";
}

// Función para validar el nombre
function validateName(name) {
    if (name === "") {
        document.getElementById("nameError").textContent = "El nombre es obligatorio.";
        return false;
    }
    return true;
}

// Función para validar el email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "El email es obligatorio.";
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "El formato del email no es válido.";
        return false;
    }
    return true;
}

// Función para validar la edad
function validateAge(age) {
    if (age === "") {
        document.getElementById("ageError").textContent = "La edad es obligatoria.";
        return false;
    } else if (isNaN(age) || age <= 18) {
        document.getElementById("ageError").textContent = "La edad debe ser un número mayor a 18.";
        return false;
    }
    return true;
}

// Función para mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successMessage = document.createElement("div");
    successMessage.textContent = message;
    successMessage.style.color = "green";
    successMessage.style.fontWeight = "bold";
    document.getElementById("userForm").appendChild(successMessage);

    // Opcional: Limpiar el formulario después de un tiempo
    setTimeout(() => {
        successMessage.remove();
        document.getElementById("userForm").reset();
    }, 3000);
}