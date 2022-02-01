/**
 * Spread Operator / Operador de reposo
 * = Permite extraer  propiedades de un objeto que aun no se ha construido
 * Nuevo de ES9
 */

const object = {
  name: "David",
  age: 32,
  country: "CO",
};

let { name, ...all } = object;
console.log(name, all);

/**
 * Porpagation Properties
 * Nuevo de ES9
 */
const object1 = {
  name: "David",
  age: 32,
};

const object2 = {
  ...object1,
  country: "CO",
};
console.log(object2);

/**
 * Promise Finally
 * = Permite saber cuando finaliza la promesa ejecutada
 * Nuevo de ES9
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello World");
        })
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("== Finalizo =="));

/**
 * Regex
 * Nuevo de ES9
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log("Date: ", year, month, day);
