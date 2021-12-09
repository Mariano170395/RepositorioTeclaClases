let moment = require('moment');


let muestraHora = moment(new Date())



let utc = moment(new Date()).utc()

console.log(muestraHora.format('DD MM YYYY hh:mm:ss'))
console.log(utc.format('DD MM YYYY hh:mm:ss'))

let diferencia = moment(utc.diff(muestraHora))

console.log(`Cantidad de horas ${diferencia.hours()}`)

let fecha1 = '1990-01-01'
let fecha2 = '1920-02-02'

if(moment(fecha1).isBefore(fecha2)){
    console.log('la fecha 1 es antes')
} else {
    console.log('la fecha 2 es antes')
}

