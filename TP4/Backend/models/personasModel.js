const personas = [
  { id: 1, nombre: "Santiago", apodo: "Caste", apellido: "Castellaro", edad: 22, email: "caste@gmail.com" },
  { id: 2, nombre: "Santiago", apodo: "Santi", apellido: "Minor", edad: 19, email: "minorsanti@gmail.com" },
  { id: 3, nombre: "Lourdes", apodo: "Lula", apellido: "Gerdes", edad: 19, email: "lulagerdes@gmail.com" },
  { id: 4, nombre: "Paula", apodo: "Pau", apellido: "General", edad: 19, email: "paugeneral@gmail.com" },
  { id: 5, nombre: "Sergio", apodo: "Profe", apellido: "Antozzi", edad: "?", email: "santozzi@gmail.com" },
  {id: 6, nombre: "Juan Carlos", apodo: "Juanca", apellido: "Mendizabal", edad: 58, email:"jcm@gmail.com"}
];

function getPersonas() {
  return personas;
}

module.exports = { getPersonas };