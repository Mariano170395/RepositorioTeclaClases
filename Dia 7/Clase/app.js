//Variables

const contador = 5 //No se puede cambiar su valor
let contadorInterno = 0;
let valorIngresado = 0;
let sumaNumerica =  0;

//Iterando

for(let i = 0; i < contador; i++ ){
    console.log(contadorInterno);
    contadorInterno = contadorInterno + 1
};

//Bucle
while( valorIngresado != 'Salir'){
    valorIngresado = prompt('Ingrese un valor')
    if(valorIngresado != 'Salir'){
        sumaNumerica = sumaNumerica + parseInt(valorIngresado)
        console.log(sumaNumerica)
    }
};

//Do While
do{
    valorIngresado = prompt('Ingrese un numero o Salir para finalizar')
    if(valorIngresado != 'Salir'){
        sumaNumerica = sumaNumerica + parseInt(valorIngresado)
        console.log(sumaNumerica)
    } else{
        alert('Gracias por usar nuestra App')
    }
}while (valorIngresado != 'Salir')