/**
 * Object.entries
 * = Convertir un objeto en una matriz
 * Nuevo en ES8
 */
const data = {
  frontend: "Oscar",
  backend: "Ana",
  design: "David",
};

const entries = Object.entries(data);
console.log(entries);
/**
 * result:
 * [
 *  ['frontend', "Oscar"],
 *  ['backend', "Ana"],
 *  ['design', "David"],
 * ]
 */

/**
 * Object.values
 * = Valores de un Objeto a un arreglo
 * Nuevo en ES8
 */
const data = {
  frontend: "Oscar",
  backend: "Ana",
  design: "David",
};

const values = Object.values(data);
console.log(values);

/**
 * padStar - padEnd
 * = Agregar caracteres a un String
 * Nuevo en ES8
 */
const string = "Hello";
console.log(`padStart: ${string.padStart(7, "Hi")}`);
console.log(`padEnd: ${string.padEnd(7, " ---- ")}`);

/**
 * Trailing commas
 * = Permite que en los objetos al finalizar una Keys se pueda agregar una coma
 * Sin error de sintaxis
 * Nuevo en ES8
 */

const data = {
  design: "David", // Coma al final
};

/**
 * Async Await
 * Nuevo en ES8
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(`Error: _${error}_`);
  }
};

anotherFunction();
