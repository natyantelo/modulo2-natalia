/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

// function checkspam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes(`viagra`) || lowerStr.includes(`xxx`);
// }
// alert(checkSpam("buy ViAgRA now"));
// alert(checkSpam("free xxxxx"));
// alert(checkSpam("innocent rabbit"));

// function truncate(str, maxlength) {
//     return  ( str. length > maxlength) ?
//     str.slice (0,maxlength -1) +"..." : str;
// }

// function extractCurrencyValue(str) {

//   return +str.slice(1);
// }

// let result = extractCurrencyValue (`$120`);
// console.log(result);

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");

alert(styles);
