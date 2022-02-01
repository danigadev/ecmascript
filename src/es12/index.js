/**
 * ReplaceAll
 * = Adiferencia del **Replace** este metodo permite que si encunetra mas de una
 * coincidencia, esta sera remplazada
 * Nuevo de ES12
 */
const string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const replaceStr = string.replace("Lorem", "JavaScript");
const replaceAllStr = string.replaceAll("Lorem", "JavaScript");
console.log({ replaceStr, replaceAllStr });

/**
 * Metodos privados
 * = Por medio del caracter #, se le dice a el metodo de la clase que sea privado
 * Nuevo de ES12
 */
class Message {
  #show(val) {
    console.log(val);
  }

  // get #add(add){
  //   // ...
  // }
}

const message = new Message();
message.show(`Hello World!`);

/**
 * Promise Any
 * = Retorna la primera Promise que se resuelva
 * Nuevo de ES12
 */
const promise1 = new Promise((resolve, reject) => reject("Reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 3"));

Promise.any([promise1, promise2, promise3]).then(response =>
  console.log(response)
);

/**
 * WeakRef(element)
 * =
 * Nuevo de ES12
 */
class anyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}

/**
 * Expresiones & Operadores
 * = Asignación AND lógico / x &&= y - x && (x = y)
 * = Asignación OR lógico / x ||= y - x || (x = y)
 * = Asignación de anulación lógica / x ??= y - x ?? (x = y)
 * Nuevo de ES12
 */
let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));

let isTrue = true;
let isFalse = false;
console.log((isTrue ||= isFalse));

let isTrue = undefined;
let isFalse = false;
console.log((isTrue &&= isFalse));
