//JSON siempre usa comillas dobles

//Api, promesas

const url = 'https://api.github.com/users/'
let resultado;

//id es nombre de usuario
let getUsuariosGit = (id) =>{
    let urlId = url + id;

    fetch(urlId)
    //Una vez que haga la promesa, quiero convertir el texto plano a JSON
        .then(response => response.json())
    //ahora quiero ver el JSON en consola y lo agrego a mi variable resultado
        .then(json =>{
            console.log(json)
            resultado = json
        })
        //Para ver si tengo algun error
        .catch(error => {
            console.log('No se pudieron solicitar los datos')
        })
}

getUsuariosGit('Mariano170395')
console.log(resultado)