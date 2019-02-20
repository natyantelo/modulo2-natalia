/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

/*function welcome(message) {
    alert(message)
}*/

/* arrow functions
let func =(arg1, arg2, ....argN)=> expression;
 

let function = email=>email.trin()
let result = arg 1+ arg2
 result.to
 return result

 let age=prompt("what ir your age?",18);
 let welcome = age<18 ? () =>alert ("hello") : 
 => alert ("greetings!");


let welcome = age<18 ? () =>alert ("hello") : 
=> alert ("greetings!");*/

let ask (question, yes, no") {
if (confirm(question)) yes()
else no();

}
ask(
    "do ypou agree?",
    function () { alert("you agreed."); },
    function () { alert("you canceled the excution."); }
)

/* objetos
let user={
    name="john",
    age="30",

squarer brackers ( hacer un objeto dentro de un objeto)
let user2= {
    direccion {
        calle:" lo que sea"
        cp: 15150
        coords: 
            lat: 175000,
    }

    }, 
    name, "pepe"

    let lat= 
    user2.direccion.coords.lat

    let user2={
        icons:{
            quitarsabanas: {
                active:true,
                done: true
            },
            metersabanas:{
                active:true,
                done:true,
            }
        }
    }

    function activaricono(icono){
        user2.[icono].active=true
    }
    se utilizan los corchetes para hacer dos acciones dinamicas
    function activardoneIcono
    (icono, cual, a que) {
        user2[icono][cual]=a que
    }*/
/* the object property*/
alert(obj._proto_);
/* EL OBJETO SE CREA CON LLAVES {}*/

/* FOR*/

for (let key in user) {
    if (key.isadmin = true) return
}
/* se utiliza key y prop como variables, se utilizan a menudo
*/

/*FOR CODES
for (let code in codes) {
  alert(+code); // 49, 41, 44, 1*/

cont user = {
    name: "John"
};
user = {
    name: "pete"
};
/* para clonar un objeto*/
let user = {
    name: "john",
    age: 30
};
let clone = object.assign({}, user);

/*clonacion profunda*/
user[key]

/* los corchetes dan forma dinamica*/

let user = {};
user.name = "john";
user.surname = "Smith";
user.name = "Pete",
    delete user.name;
}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log const user = {
    name: "John"
};
user.name = "Pete";

let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}


let menu = {
    width: 200,
    heigh: 300,
    title: "My menu"
};

function multuplyNuemric(obj) {

    for (let key in obj) {
        if (typeof obj) [key] == 'number') {
            obj[key] *= 2;
        }
    }
}
alert(menu);
