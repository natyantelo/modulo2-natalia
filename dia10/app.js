/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

/*

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

/*ejercicio 6 ; Map to names*/

/*let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

alert(names);

/*ejercicio 7:Map objects*/

/*let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => {
  user.fullName = user.name + " " + user.surname;

  console.log("user es --> ", user);
});

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

/*ejercicio 8: sort objects

function sortByName(users) {
  arr.sort((a, b => (b.name > a.name ? 1 : -1)));
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [john, pete, mary];

sortByName(arr);

// now: [john, mary, pete]
alert(arr[1].name); // Mary*/

/*ejercicio 1: filter unique array members*/

/*function unique(values) {
  let map = new Map();
  map.set();
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O

ejercicio 2: filter anagrams*/

// for of del array recorrer el array
// eso nos da cada palabra
// con cada palabra pasarla a minusculas
// separar la palabra en letras split("")
// ordenar con sort()
// volverlas a juntar join("")

/*function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    console.log(sorted);
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));*/

/*Ejercicio 3: Iterable Keys

- obetener un array de map.keys() y seguir trabajando con ella aparte del mapa en si*/
/*map.set(key, value)  key es name y john es value*/

/*let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
alert(keys);*/

/*Ejercicio 4: store "unread" flags

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

/*EJERCICIO 1 SUM PROPERTIES*/

/*1º) crear el objeto y darme cuenta de como se escribe(let salaries= )
let salaries= {
    john = 100,...
    fuera de la funcion

}
2º)crear la funcios con la variable y el bucke que quiera para que haga algo y luego en este caso aplicarle sum+= value; para que lo haga
3º) fuera del for hacerle un return sum para que te retorne en la consola lo que quieras
4º) la variable resultado, por ejemplo, para que te lo guarde
4º) console log del resultado para verlo */

/*let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}
let resultado = sumSalaries(salaries);
console.log(resultado);*/

/*EJERCICIO 2: COUNT PROPERTIES*/

/*let user = {
  name: "John",
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user));*/

/*EJERCICIO 1: destructuring assignement*/

/*let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

alert(name);
alert(age);
alert(isAdmin);

/*EJERCICIO 2: maximal salary*/

/*let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  let maxsalary;
  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      maxsalary = salary;
      maxName = name;
    }
  }

  console.log(`${maxsalary} es el salario mayor y es de ${maxName}`);
}
topSalary(salaries);*/

/*COMO CREAR FECHAS:

new Date() new Date sin argumentos te devuelve la fecha actual.
let now= new Date();
alert (now);


/*EJERCICIO FECHAS
EJERCICIO 1:

Create a date
Cree un objeto Date para la fecha: 20 de febrero de 2012, 3:12a.m. La zona horaria es local.

Muéstralo usando alert.*/

/*let now = new Date(2012, 01, 20, 03, 12);
alert(now);*/

/*EJERCICIO 2*/

/*function getWeekDay (date){
    
    let days=["SU","MO","TU","WE","TH","FR","SA"];

    return days[date.getDay()];
}

let date = new Date(2012,0,3);
alert (getWeekDay(date));

/*EJERCICIO 3: Escriba una función getLocalDay(date) que 
devuelva el día de la semana "europeo" para date.*/


/*function getLocalDay(date {

  let day = date.getDay();
  if( day==0);
  day=7;
})
return day;

console.log(getLocalDay(new Date(2012,0,3)));










