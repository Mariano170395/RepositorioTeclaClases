//Inicializo mis Variables
let usuario;
let password;

usuario = prompt("Ingresa tu user");
//Condicionales
if (usuario === "Admin") {
  password = prompt("Ingrese su password");
  //Condicional Password
  if (password === "TheMaster") {
    window.alert("Bienvenido!");
  } else if (password === "") {
    window.alert("Cancelado");
  } else {
    window.alert("Password Incorrecta");
  }
} else if (usuario === "") {
  window.alert("Cancelado");
} else {
  window.alert("No te conozco");
}
