//Constructor 1
let objeto = {}

objeto.nombre ='Mariano';
objeto.edad = 26;

console.log(objeto)

//Constructor 2
function Objeto(){
    this.nombre = 'Heriberto'
    this.subObjeto = {};
    this.array =[1,2,3]
    this.saludar = () =>{
        console.log('holi')
    }
}

let nuevoObj = new Objeto
console.log(nuevoObj.saludar())
