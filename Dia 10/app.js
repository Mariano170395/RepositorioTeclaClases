//Variables
//Funciones
//Iteraciones
//Switch

//app muestre peliculas al azar
let peliculas =['matrix', 'la llamada', 'rapido y furioso', 'superman', 'batman', 'spiderman'];

let inicio = () =>{
    let seleccion
    do {
        seleccion = parseInt(prompt('Ingrese un valor\n 1-listar peliculas \n 2-recomiendame una pelicula \n 3-salir de la app'))
        switch(seleccion){
            case 1:
                //Muestra cada Item de mi array
                peliculas.forEach(data => console.log(data))
                break
            case 2:
                let resultado = Math.round(Math.random() * (peliculas.length - 1));
                console.log(peliculas[resultado])
                break
            case 3:
                alert('Gracias por usar nuestra app');
                break
            default:
                alert('Ingresa alguno de los valores solicitados')
                break
        }
    } while (seleccion != 3);
};

inicio();