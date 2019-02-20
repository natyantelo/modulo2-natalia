/* crea una funcion 
se le pasa un parametro(num
    que contenga  una promesa que si el numero es mayor de 10 se resuelv y si no, no
    
    llamar a la funcion y coger los datos o controlar los errores.*/

/*function greaterthan10(num) {
  return new Promise(function(resolve, reject) {
    if (num > 10) {
      resolve("el numero es mayor que diez todo ok");
    } else {
      reject(new Error("errorrrrrrrrrr"));
    }
  });
}

greaterthan10(20)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
  });

  Escribir dos funciones que usen promesas que puedas encadenar. 
  La primera función pasarAMayus() que tomará un array de palabras y 
  las pondrá en mayúsculas y la segunda función ordenarPalabras() 
  que las ordenará alfabéticamente.Si el array contiene datos que no 

  son strings debería lanzar un error.*/
/*Map(index,valor)*/

function pasarAMayus(arr) {
  return new Promise(function(resolve, reject) {
    let newArr = arr.map(value => {
      if (typeof value != "string") {
        reject("Errorrrr");
      } else {
        return value.toUpperCase();
      }
    });

    resolve(newArr);
  });
}

/*function ordena(arr) {
  return new Promise(function(resolve, reject) {
    // ordenar el array que nos llega
    let newArr = arr.map;
  });
}*/

pasarAMayus([apple, tomato, dog]).then(function(result) {
  ordena(result);
});
