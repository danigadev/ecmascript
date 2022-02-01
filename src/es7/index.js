/**
 * Includes
 * = Anteriormente se realizada con un indexOf
 * Nuevo de ES7
 */
let numbers = [1, 2, 3, 5, 6, 7, 4];

if (numbers.includes(7)) {
  console.log("Existe el numero 7");
} else {
  console.log("No existe el valor");
}

/**
 * Elevar a la potencia
 * = Esto se realiza mediante la opción **
 * Nuevo de ES7
 */
let base = 4;
let exponent = 2;

let result = base ** exponent;

console.log(result);
