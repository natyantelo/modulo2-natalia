/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

/*EJERCICIO 1 ASINCRONIA

¿Cuál es la salida del código de abajo?*/

/*let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

/* EJERCICIO 2 ASINCRONIA

 La función incorporada setTimeout utiliza devoluciones de llamada. 
 Crear una alternativa basada en la promesa.

La función delay (ms) debería devolver una promesa. 
Esa promesa debería resolverse después de ms milisegundos, 
para que podamos agregar.then a esto, así:*/

/*function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => alert("runs after 3 seconds"));*/

/*function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

loadScript("./one.js")
  .then(function(script) {
    return loadScript("./two.js");
  })
  .then(function(script) {
    return loadScript("./three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });
