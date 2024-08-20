const num = prompt("Coloca un numero ");
if (num % 2 === 0) {
  console.log("su numero es par");
} else {
  console.log("su numero es inpar");
}

/////
const numA = prompt("coloca otro numero");
const numB = prompt("coloca otro numero");

if (numA > numB) {
  console.log(numA, "Es mayor que", numB);
} else if (numA < numB) {
  console.log(numB, "Es mayor que", numA);
} else {
  console.log("son iguales");
}

/////
const numC = prompt("coloca un numero para dividir");
if (numC % 5 === 0) {
  console.log(numC, "Es multiplo de 5");
} else {
  console.log(numC, "No es multiplo de 5");
}

////
const numD = prompt("coloca un numero para contar");
for (let i = 0; i <= numD; i++) {
  console.log(i);
}

////
const numE = prompt("coloca un numero");
const nombre = prompt("pone un nombre");
for (let i = 1; i <= numE; i++) {
  console.log(nombre);
}

////
function imprimirArray(arr) {
  console.log(arr);
}
const myArray = [1, 2, 3, 4, 5];
imprimirArray(myArray);

function imprimirArray(arr) {
  arr.forEach((valor) => {
    console.log(valor);
  });
}

////

function arrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== 4) {
      console.log(arr[i]);
    }
  }
}
const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrays(miArray);

/////

function multiplicarNumeros(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * num);
  }
}

let NUMEROS = [1, 2, 3, 4, 5];
let multiplicador = 5;
multiplicarNumeros(NUMEROS, multiplicador);
