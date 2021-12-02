// // //Codigo sincronico
// // console.log('esto se muestra primero');
// // console.log('esto se muestra segundo');
// // console.log('esto se muestra tercero');

// //Por lo general todo nuestro codigo es asincronico

// console.log('primera prueba asincronica')
// setTimeout(()=>{
//     console.log('segunda prueba asincronica')
// },2000) //Estoy atrasando la segunda funcion 2 segundos (1 sec = 1000milisec)

// console.log('tercera prueba asincronica')

// let array = [1,2,3,4,5] // yo quisiera que se viera [2,1,3,4,5]

// console.log(intercambio(array,1,2))

let inicio = () =>{
    let arrayNombres =['Marcelo', 'Jose', 'Pedro', 'Ariel', 'Sonia', 'Eduardo']
    console.log('Iniciando aplicacion')

    setTimeout(()=>{
        console.log('Ordenando')
    },1000)

    setTimeout(()=>{
        console.log(ordenBurbuja(arrayNombres))
    },4000)
}

inicio()