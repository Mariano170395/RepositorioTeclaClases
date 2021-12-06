let operaciones = (numero1, numero2) => {
  let suma = () => {
    let resultadoSuma = numero1 + numero2;
    console.log(resultadoSuma);
  };

  setTimeout(() => {
    suma();
  }, 2000);

  let resta = () => {
    let resultadoResta = numero1 - numero2;
    if (resultadoResta < 0) {
      resultadoResta = resultadoResta * -1;
      console.log(resultadoResta);
    } else {
      console.log(resultadoResta);
    }
  };

  setTimeout(() => {
    resta();
  }, 4000);

  let division = () => {
    if (numero2 == 0) {
      console.log("Estas dividiendo entre cero");
    } else {
      let resultadoDivision = numero1 / numero2;
      console.log(resultadoDivision);
    }
  };

  setTimeout(() => {
    division();
  }, 6000);

  let potencia = () => {
    if (numero2 == 0) {
      console.log("Estas elevando un numero a la 0");
    } else {
      let resultadoPotencia = Math.pow(numero1, numero2);
      console.log(resultadoPotencia);
    }
  };
  setTimeout(() => {
    potencia();
  }, 8000);
};

operaciones(6, 9);

function division(a,b) {
    console.log(a/b)
}
function resta(a,b,division) {
    console.log(a-b)
    division(a,b)
}
function suma(a,b,resta,division) {
    console.log(a+b)
    resta(a,b,division)
}

suma(5,8,resta,division);
