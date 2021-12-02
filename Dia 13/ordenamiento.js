let ordenBurbuja = (array) => {
  let largo = array.length;

  //i es loop externo
  //j es loop interno
  for (let i = 0; i < largo; i++) {
    for (let j = 0; j < largo - 1 - i; j++) {
      let valorIzquierdo = j + 1;
      if (array[j] > array[valorIzquierdo]) {
          intercambio(array, j, valorIzquierdo)
      }
    }
  }
  return array
};
