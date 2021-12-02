let intercambio = (array, indiceUno, indiceDos)=>{ //parametros array y el indice a intercambiar
    let valorTemporal = array[indiceUno];
    array[indiceUno] = array[indiceDos];
    array[indiceDos] = valorTemporal;
    return array
}