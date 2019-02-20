/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log(Sabado JavaScript);

// let user = {
//     name: "John",
//     age: 30

// };
// user.sayHi = function () {
//     alert("Hello");
// };
// user.sayHi();

// let user = {

// }
// console.log(alert this);

/* creas una arrow function*/
/*es una funcion que no tiene nombre */

// let arrow = () => {

// }
// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };

// user.sayHi(); // Ilya
// (user.go)();
// user.go();
/* fijarse en ; al final*/

let calculator = {
  read() {
    this.a = +prompt("introduce a", 0);
    this.b = +prompt("introduce b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul();
console.log(calculator);

function User.saluda(this.name, this.saluda){

    let user.saluda = this.name new ("Hola",true);
    let user2.saluda = this.saluda new ("John",true);
},
