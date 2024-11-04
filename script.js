const limite = 1;
let iterador = 10;

function reduceCounter() {
  if (iterador < limite) {
    iterador = 10;
  } else {
    iterador--;
  }

  document.querySelector('.circle').innerHTML = iterador;
}

setInterval(reduceCounter, 1000)
