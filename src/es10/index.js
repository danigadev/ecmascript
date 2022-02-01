/**
 * flat
 * = Permite aplanar una matriz a la que se le indica
 * Nuevo de ES10
 */
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

/**
 * faltMap
 * = Permite mapear cada elemento, pasar una función y aplanar segun el resultado
 * Nuevo de ES10
 */
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

/**
 * trimStart - trimEnd
 * = Permite eliminar los espacios en blanco de un String, al inicio o al final
 * Nuevo de ES10
 */
let strHelloStart = "      Hello World";
let strHelloEnd = "Hello World     ";
console.log(`Before Start: ${strHelloStart}`);
console.log(`After Start: ${strHelloStart.trimStart()}`);

console.log(`Before End: ${strHelloEnd}`);
console.log(`After End: ${strHelloEnd.trimEnd()}`);

/**
 * try/cacth
 * = Pasar de forma opcional el parametro de error al valor de Catch
 * Nuevo de ES10
 */
try {
} catch {
  // Before catch (error)
  error;
}

/**
 * fromEntries()
 * = Transformar un arreglo a un objeto, contrario a un Entries()
 * Nuevo de ES10
 */
let entries = [
  ["name", "Oscar"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

/**
 * Symbol / Objecto de tipo simbolo
 * =
 * Nuevo de ES10
 */
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
