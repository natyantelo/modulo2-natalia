/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

let arr = ["a", "b"];

// arr.push(function(){
//     alert(this);
// }
// arr[2]();
/*
function sumImput() {
  let numbers = [];
  while (true) {
    let resultadoDelPrompt = prompt("a number please?", 0);
    if (
      resultadoDelPrompt == "" ||
      resultadoDelPrompt == null ||
      !isFinite(+resultadoDelPrompt)
    ) {
      break;
    } else {
      numbers.push(+resultadoDelPrompt);
    }
  }
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}
alert(sumImput());

let objPersona = {
  nombre: "maria",
  edad: 35,
  estadoCivil: "casada",
  soltera: false,
  casadaCon: "543532463X"
};

let number = 0;
let cadena = "";
let falso = false;
let array = [];
let pepe = null;

let objCoche = {};

function sumarDosNumeros(num1, num2) {
  return num1 + num2;
}

class Coche {
  constructor(color, modelo) {
    this.color = color;
    this.modelo = modelo;
  }

  static colorCompare(coche1, coche2) {
    if (coche1.color == coche2.color) {
      return true;
    } else {
      return false;
    }
  }
}

let colorRojo = "rojo";
let c1 = new Coche(colorRojo, "golf");
let c2 = new Coche("azul", "opel Corsa");

Coche.colorCompare(c1, c2);*/

/*class Persona {
  constructor(pelo, dni, pareja) {
    this.pelo = pelo;
    this.dni = dni;
    this.pareja = pareja;
  }
  static personaCompare(persona1, persona2) {
    if (persona1.pelo == persona2.pelo) {
      return true;
    } else {
      return false;
    }
  }
/*
let pedro = new Persona("negro", "78801334E", "lucia");
let lucia = new Persona("rubia", "3666666W", "pedro");

function datospersona(persona) {
  console.log(persona);
}

Persona.personaCompare(pedro, lucia);
datospersona(pedro);
datospersona(lucia);*/

/*EJERCICIOS DIA 10 PASARLOS A LA CARPETA DEL DIA 10*/

/*EJERCICIO 1*/

/*Translate border-left-width to borderLeftWidth
Escriba la función camelize(str) que cambia las palabras separadas por guiones como "my-short-string" en "myShortString".

Es decir: elimina todos los guiones, cada palabra después del guión se convierte en mayúsculas.

Ejemplos:*/

/*amelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';*/

/*function camelize(texto) {
  return texto
    .split("-")

    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));*/

/* Ejercicio2: Escribe la función filterRange(arr, a, b) que obtiene un array arr,busca elementos entre a y b y en y lo devuelve en un array de ellos..

LA función no debe modificar el array. Dbería devolver un nuevo array. Por ejemplo:*/



function filterRange [arr,a,b] 
return filterrange a && 

let results = arr.filter(function(item,index,array)){

}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4); 
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)

/*Ejercicio 3:
Escriba una función filterRangeInPlace(arr, a, b) que 
obtiene un array arr y elimina de el todos los valores 
excepto aquellos que están entre a y b. 
La prueba es: a ≤ arr[i] ≤ b.

La función solo debe modificar el array. 
No debe devolver nada.

Por ejemplo:*/

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

/*ejercicio 4:

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in the reverse order

alert( arr ); // 8, 5, 2, 1, - */

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

/*ejercicio5:

/*ejerccio 6:*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary