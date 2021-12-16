console.log(
  "hola jorge, como estás? te estoy escribiendo desde un archivo externo"
);

// declarando una variable
let hola;
//
// Asignacion "="
hola = 20;
//
//Variable con asignacion en un solo codigo
let hola_segundo = 30;
//
// Sumando con valores numericos
let gaseosas = 20;
let galletas = 80;
let totalItems = gaseosas + galletas;
// Muestreo de los valores que contienen hola y hola segundo..
console.log(hola);
console.log(hola_segundo);
// Suma de las variables de gaseosas + galletas.
console.log(totalItems);
// // Mneras de escribir las variables
// 1- let totalItem; // camelCase (manera de escribir en java script)
// 2- let hello_world; // snake_case
// 3- let Pascal_Case; // Pascal_Case
// tipos de datos

//DATOS PRIMITIVOS
// 1-NUMEROS ENTEROS
let primero = 1_000_000;
console.log(primero);
// DECIMALES
let floats = 1.14;
console.log(floats);
console.log(
  primero + floats
); /*Suma de enteros con decimales, restas, multiplicaciones y divisiones*/
// POTECIACION DE VALORES, Suelen ser demasiados imprecisos con las operaciones matematicas
console.log(primero ** 2);
let vinos = 30.2;
let alfalfa = 2;
let totalPrice;
(vinos * 100 * alfalfa) / 100;
console.log(totalPrice);

// STRINGS O CADENAS DE TEXTO.

let firstString = "Hola mundo";
// con apostrofe= "D'alessandro" las comillas simples van dentro de las comillas dobles
let secondString =
  "hola maquina del mal"; /*ES MAS COMUN USAR COMILLAS SIMPLES */
let thirdString = `como te va tio`; /*COMILLAS INVERTIDAS SE HACEN CON ALTGR + CORCHETE DE CIERRE  */
// concatencacion de las palabras  no se utiliza mucho hoy en dia.
console.log(firstString + secondString);
/* interpolacion de variables, tambien se pueden agregar valores numericos*/
console.log(`${firstString} ${secondString} ${thirdString}`);
console.log(firstString);

// Bolean, significa especificamente verdadero y/o falso
let isTrue = true;
let isFalse = false;

// Null variables nulas, no almacenan ningun valor
let iAmNull = null;

// Undefined, se muestra en la consola como indefinido y nos sirve para reservar espacio en memoria para Java Script
let iAmUndefined;
console.log(iAmUndefined);

// Symbol and BigInt sirve para manipular numeros grandes como decir un millon a la 76 x ex (AVANZADO)

// Inmutables, no confundir inmutabilidad con reasingnacion (universal x hijos xd)
let bar = "bar";
console.log("Bar inmutable ===>", bar);
bar.toUpperCase(); // bar pasara a ser BAR con mayuscula= NOMBRE DE LA VARIABLE + FUNCION "touppercase"
let barMayus = bar.toUpperCase();
console.log("bar con mayus", barMayus);

// PREGUNTA DE ENTREVISTA TÉCNICA (Importante saber)
// Los valores primitivos en js no se copian por referencias si no por el valor que almacenan
let rolling = "Rolling";
let code = rolling;
rolling = "code string";
console.log("Respeusta definitiva", code);

/*Objetos o compuestos o datos no primitivos*/
