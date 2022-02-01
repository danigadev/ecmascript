/**
 * Functions
 * Previo a ES6
 */
function newFuntion(name, age, country) {
  var name = name || "Daniel";
  var age = age || 23;
  var country = country || "CO";

  console.log(name, age, country);
}

/**
 * Functions
 * ES6
 * Permite que si al momento de llamar la newFuntionES6() y no realizo
 * el envio de argumentos, estos tomaban los que se encuentran como **Default**
 */
function newFunctionES6(name = "Santiago", age = 32, country = "MX") {
  console.log(name, age, country);
}

/* Llamado de function sin parametros */
newFunctionES6();
/* Llamado de funtion con parametros */
newFunctionES6("Daniel", 23, "CO");

/**
 * Template literals
 * Previo a ES6
 */
let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

/**
 * Template literals
 * ES6
 */
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/**
 * Multilínea
 * Previo a ES6
 */
let strLorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n" +
  "Distinctio error magni obcaecati dolorum, eum, rerum architecto voluptates earum dignissimos quisquam sapiente nostrum necessitatibus odio laborum quae magnam tempora reprehenderit quos.";
console.log(strLorem);
/**
 * Multilínea
 * ES6
 * Se usan las comillas francesas permitiendo que con el [Enter] se pueda hacer salto de linea
 * Sin requerir usar **\n**
 */
let strLorem2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Distinctio error magni obcaecati dolorum, eum, rerum architecto voluptates earum dignissimos quisquam sapiente nostrum necessitatibus odio laborum quae magnam tempora reprehenderit quos.`;
console.log(strLorem2);

/**
 * Desestructuración de elementos
 * Previo a ES6
 */
let oPerson = {
  name: "Santiago",
  age: 26,
  country: "EU",
};
console.log(oPerson.name, oPerson.age);

/**
 * Desestructuración de elementos
 * ES6
 */
let { name, age, country } = person;
console.log(name, age, country);

/**
 * Operador de propagación
 * = Expandir varios elementos en ciertas situaciones
 * ES6
 */
let oTeam1 = ["David", "Oscar", "Diana", "Julian"];
let oTema2 = ["Valeria", "Yesica", "Juan", "Fabian"];

let oEducation = ["David", ...oTeam1, ...oTema2];
console.log(oEducation);

/**
 * Declaración de variables
 * Previo a ES6
 * Var es declarada/definida de manera global
 * Var es posible asignar un valor diferente a el inicial
 */
{
  var globalVar = "Global var";
  var aVar = "b";
  aVar = "c"; // Permite realizar esta reasignación de la varibale
}

/**
 * Declaración de variables
 * ES6
 * Let solo es accesible en el bloque de código donde se declarada/definido
 * Const no es posible re asignar un valor diferente a el inicial
 */
{
  let globalLet = "Global Let";
  console.log({ globalLet });
}
console.log({ globalVar });

const a = "b";
a = "a"; // No es posible realizar esta acción en la varibale **a**

/**
 * Propiedad de objetos mejorada / Parámetros en objetos
 * Previo a ES6
 */
let name = "Oscar";
let age = 43;

obj = { name: name, age: age };

/**
 * Propiedad de objetos mejorada / Parámetros en objetos
 * ES6
 */
object = { name, age };
console.log({ obj, object });

/**
 * Arrow function / Functions tipo fecha
 * Previo a ES6
 */
const names = [
  { name: "David", age: 32 },
  { name: "Daniel", age: 23 },
];

let listOfNames = names.map(function (item) {
  console.log(iutem.name);
});

/**
 * Arrow function / Functions tipo fecha
 * = Sintaxis reducida
 * ES6
 */
let listOfNamesES6 = name.map(item => {
  console.log(item.name);
});

const listOfNames2ES6 = (name, age, country) => {
  // ...
};

const listOfNames3ES6 = name => {
  // ...
};

const square = num => num * num;

/**
 * Promesas => algo va a suceder
 * = Solución de Callback hell (no escalables, adinar 20 elementos)
 * ES6
 */
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("¡Hey!");
    } else {
      reject("¡Ups!");
    }
  });
};

// Manejo de promesas
helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

/**
 * Clases
 */

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
  sustra(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA - this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));
console.log(calc.sustra(2, 2));

/**
 * Trabajar con modulos
 */

import { hello } from "./module";
hello();

/**
 * Generradores
 * = Es una función especial retorna una serie de vaor según el algoritmo definido
 */
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "Wold";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
