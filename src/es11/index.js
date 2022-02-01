/**
 * Dynamic import
 * Nuevo de ES11
 */
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");

  module.hello();
});

/**
 * Big INT
 * = Permite trabjar con numeros mayores a 2^53
 * Nuevo de ES11
 */
const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log({
  bigNumber,
  anotherBigNumber,
});

/**
 * Promise All Settled
 * = Devuelve una promesa, que se resuelve despues de que todas las promesas dadas
 * Se hayan cumplido o rechazado
 */
const promise1 = new Promise((resolve, reject) => reject("Reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("Resoolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("Resoolve 2"));

Promise.allSettled([promise1, promise2, promise3]).then(response =>
  console.log(response)
);

/**
 * Global this
 * = similar a el objeto Global/window
 * Nuevo de ES11
 */
console.log(window);
console.log(globalThis);

/**
 * Nuevo operador logico: null operatos
 * =
 * Nuevo de ES11
 */
const fooo1 = null ?? "default string";
console.log(fooo1);

const fooo2 = "null" ?? "default string";
console.log(fooo2);

/**
 * Optional chaining
 * = Permite validar si esta propiedad existe en el objeto
 * Permitiendo que la app siga funcionando y no se rompa, devolviendo un Undefined.
 * Nuevo de ES11
 */
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.emial) {
  console.log("Email");
} else {
  console.log("Fail");
}
