const express = require('express');
const server = express ();

server.get('/', (req, res)=>{
    res.send('Bienvenido sea uste a su servilleta')
})

server.get('/fotos/1', (req,res)=>{
    res.json({
        id:1,
        title: 'Imagen de ejemplo',
        url: 'www.imagen.com.mx.jp.donbarre/1'
    })
})

server.get('/error',(req, res)=>{
    res.statusCode = 500
    res.json({
        error: 'Seyor algo salio mal'
    })
})

server.listen(3000, ()=>{
    console.log('Wenas tardes bienvenido a su servilleta')
});