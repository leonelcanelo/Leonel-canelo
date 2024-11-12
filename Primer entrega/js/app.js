
const edad = prompt("Ingrese su edad:");


if (isNaN(edad)) {
  alert("Error: La edad debe ser un número.");
} else {

  const edadNum = parseInt(edad);

  
  if (edadNum >= 18) {
    console.log("Acceso permitido.");
    alert("Bienvenido al sitio web.");
  } else {
    console.log("Acceso denegado.");
    alert("Lo sentimos, debes tener al menos 18 años para acceder al sitio web.");
  }
}
