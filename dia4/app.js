/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log(Hola);

// if (age >= 14 && age <= 90);

/*

let user;

user = prompt("quien eres");
console.log(user);

if (user == "maria") {
    let pass = prompt("contraseña");
    if (pass == "1234") {
        alert("correcta");
    } else {
        alert("incorrecta");
    }

} else {
    alert("no quiero tu contraseña");
}





function showCanceled(guai) {
    return guai == null || guai == "";
    return true;
}else {
    return false;
}
}

let rolUser = propmt("¿Quien eres?");
if (rolUser == admin) {
    let pass = propmt("contraseña");

    if (pass = "master") {
        alert("hola administrador")

    } else if (pass == null || pass == "")
        alert("canceled");

} else if (rolUser = null) {
    alert("no te conozco");

    let(pass = "canceled") {
        alert("canceled")
    }

}

*/
/*esta funcion devuerlve el valor minimo de los dos parametro*/
function min(a, b) {
    let toret; /*valor a devolver*/
    if (a < b) {
        /*a es menor que b*/
        toret = a;
    }
    else {
        /*b es menor que a
        o son iguales*/
        toret = b;
    }
    return toret;
    //if a < b ? (return b) : (return a);

    let resultado = min(-9, 5)
    console.log(resultado)

}

function potencia(base, exponte) {
    let toret;//resultado
    if (exponente == 0) {
        toret = 0;
    }
    if (exponente == 1) {
        toret = base;
    }
    if (exponente > 1) {
        toret = base; /* base elevado a 1 */
        for (contador = 1; contador < exponente; contador = contador + 1) {
            toret = toret * base
        }
    }
    return toret;
}
/* Ejemplo de Prompt*/

let age = prompt("How old are you?", 100);
alert(`you are ${age} years old!`);

/* Ejemplo de  confirm */

let isBoss = confirm("are you the boss?");
alert(isBoss);

/* Ejemplo de if*/

let year = prompt('In which year was ECMAScript-2015 specification published!');

* !*
if (year == 2015)
    alert(' you are right!');
* /!*

if (year == 2015) {
    alert("that's correct!");
    alert("you are so smart!");

}

/* ejemplo de Else*/

let year = prompt("in which yuear was the ECMAScript-2015 specification published?", "");
if (year == 2015) {
    alert("you are correct");
} else {
    alert("how can you be so wrog?");
}
/* Ejemplo de ternario*/
/* el valor ternario  tiene tres operandos, evalua la condición si es veraz 
devuelve el valor 1, de lo contrario devuelve el valor 2 */


let access Alowed = Age > 18 ? true : false;

/* Ejemplo con ternario ? */

let age = prompt("age ?", 18);
let message =
    age < 3 ? "hy baby"
        : age < 18 ? "Hello"
            : age < 100 ? "Greetings"
                : "what an unusual age!";
alert(message);

/*ejemplo de Logical Operators: OR ||*/

result = a || b;

if (1 || 0) {
    alert("truthy");
}

let hour = 9

if (hour < 10 || hour > 18) {

    alert("The office is closed");
}


let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert(name);

/* ejemplo de AND &&*/

let hour== 12;
let minute== 30;

if (hour == 12 && minute == 30) {
    alert("the time is 12:30");
}


