//Variables

let miPrimeraVariable = 'Hola soy una variable'
console.log(miPrimeraVariable)

//Operadores Matematicos

let variableNumerica = 123
variableNumerica = variableNumerica + 1
console.log(variableNumerica)

miPrimeraVariable = miPrimeraVariable + ' y agregue texto desde Js'
console.log(miPrimeraVariable)

//Condicionales
if(variableNumerica === 135){
    console.log('Esto es True')
} else {
    console.log('Esto es False')
}

if(typeof(miPrimeraVariable) === 'string'){
    alert('La variable es de tipo string')
} else{
    alert('La variable no es un string')
}

if(typeof(miPrimeraVariable) === 'string' && miPrimeraVariable === 'Hola soy una variable y agregue texto desde Js'){
    alert('Siuuu')   
} else {
    alert('Nu carnal')
}

//Integrando todo hasta ahora
let nombre;
let apellido;

nombre = prompt('Ingresa tu Nombre')
apellido = prompt('Ingresa tu apellido')

console.log(nombre + " " + apellido )

//Sumar interactivamente
let suma;
if(nombre === 'Mariano'){
   let primerNumero = parseInt(prompt('ingrese el primer numero')) 
   let segundoNumero = parseInt( prompt('ingrese el segundo numero'))
   suma = primerNumero + segundoNumero 
} else{
    alert('no krnal')
}

console.log(suma)