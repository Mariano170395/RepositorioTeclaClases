//Funciones

// let variableFuncion = function() {
//     console.log('Hola Mundo')
// }

// variableFuncion()

// function mostrarValor() {
//     let nombres = prompt('Ingresa un nombre')
//     alert(`El nombre ingresado es ${nombres}`)
// }

// mostrarValor()

// let tercera = (data) =>{
//     console.log(data)
// }

// tercera('Hola')

//Switch

let nombre;
let apellidos;
let edad;
let valor = 0;

let muestraEnPantalla = (data) =>{
    alert(`El dato Ingresado es ${data}`)
}

do {
    valor = prompt('Ingresa un Valor\n 1-Para agregar su nombre\n 2-Para agregar sus apellidos\n 3-Para agregar tu edad\n Salir para finalizar el programa')
    switch(valor){
        case '1':
            nombre = prompt('Ingresa tu nombre');
            muestraEnPantalla(nombre);
            break
        case '2':
            apellidos = prompt('Ingresa tus apellidos')
            muestraEnPantalla(apellidos)
            break
        case'3':
            edad = prompt('Ingresa tu edad')
            muestraEnPantalla(edad)
            break
        case 'Salir':
            break
        default:
            alert('Ingresa alguno de los valores requeridos')
    }
} while (valor != 'Salir');