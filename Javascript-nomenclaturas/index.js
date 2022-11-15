console.log ('hola mundo');

// los comentarios se escriben con (dos slash //)
// TIPOS DE DATOS
// String: cadena de caracteres ej 'a''hola''hola mundo'
// Boolean: solo contienen true o false (condiciones)
// Null: valor nulo. equivale a variable vacia
// Number: numeros (111234123 1 12 123.) cuando los numeros estan dentro de
// comillas "123654" se considera una String, y los numeros cuando estan sin comillas
// ej 1235123 se consideran Number.
// Undefined: variable que no ha sido definida
// Object: Objeto son estructuras que permiten agrupas todos los tipos de datos
//---------------------------------------------------------------------------------------
// DEFINICION DE VARIABLES var
//
// vat let const
//
// var: se una para definir variables. forma antigua, se intenta no usar este metodo
// var miprimeravariable = 'lala' //definicion de primera variable
//
//  let asigna nombre a la variable que deseo crear con el valor que yo quiera crear y se pueda
//  usar mas adelante sin necesidad de conocer el valor de la variable.
//
let miprimeravariable = 'mi primera variable estoy aprendiendo js ';
//console.log(miprimeravariable)

//MUTABILIDAD: cambiar el valor de la variable y volviendo a imprimir el nuevo valor
miprimeravariable = 'esto ha cambiado';
//console.log(miprimeravariable)
//
//definir variable boolean (true o false )
let miboolean = true;
let miotrobool = false;
//
// deiniendo  variables numericas (number)
let minumero = 0;
let minumero2 = 12;
let minumero3 = -123;

//console.log (minumero, minumero2, minumero3, miprimeravariable, miboolean)

//  dato indefinido Undefined
let undef; // al no colocarle valor a la variable js lo entiende como indefinido
//console.log (undef)
//
// deiniendo variable nulo NULL
// a diferencia de undefined esta tiene valor NULL
let nulo = null;
//console.log(nulo)
//
//
// tipo de dato OBJETO : un objeto es una a grupacion de varios datos que hacen sentido entre si

// objeto vacio: no contiene datos
//const miPrimerObjeto = {}

// objeto
const miObjeto = {
  unNumero: 12,
  unString: 'esto es un string',
  unaCondicion: true,
};
console.log (miObjeto);
console.log (miObjeto.unaCondicion);

// ARREGLOS
// Arreglo vacio
const arrvacio = [];
//arreglo con datos
const arr = [1, 2, 'hola', miObjeto];
//console.log (arr, arrvacio)

arrvacio.push (5);
arrvacio.push (3);
arrvacio.push ('hola');
arrvacio.push (miprimeravariable);
console.log (arrvacio);

// OPERACIONES MATEMATICAS

const suma = 1 + 2;
const restar = 1 - 2;
const multiplicar = 3 * 2;
const dividir = 9 / 2;
console.log (suma, restar, multiplicar, dividir);

//const es una variable que no cambia el valor declarado y let es una variable que
//puede cambar su valor declarado

let num = 5;
num++;
num++;
num++;
num++;
num++;
console.log (num);

//operador de asignacion

num += 5; // ejemplo de operador de asigancion que aumenta su valor en el valor indicado (5)
console.log (num);
num -= 5; // ejemplo de operador de asigancion de resta
console.log (num);
num *= 5; // ejemplo de operador de asignacion de multiplicacion
console.log (num);
num /= 2; //ejemplo de operador de asignacion de division
console.log (num);

// operadores de comparacion,  siempre devuelven datos boolean (true or false)
const resultados1 = 5 === 6; // este ejemplo de igualdad estricta compara si el numero 5 es igual al 6 de manera estricta
console.log (resultados1);

const resultados2 = 5 == 5; // este ejemplo de igualdad no estrictas compara si el numero 5 es igual al 5  donde el valor tambien puede
// ser un string '5'
console.log (resultados2);

const resultado3 = 5 < 6; // operador de comparacion  menor que, que compara si el numero de la izquierda es menor que el numero de la derecha
const resultado4 = 5 < 5; // segundo ejemplo de menor que
const resultado5 = 5 > 6; // operador de comparacion  mayor que que compara si el numero de la izquierda es mayor al de la derecha
const resultado6 = 5 > 4; // segunda parte del ejemplo mayor que

console.log (resultado3, resultado4, resultado5, resultado6);

// operadores de comparacion  menor o igual

const resultado7 = 5 <= 6; // operador de comparacion  menor que, que compara si el numero de la izquierda es menor o igual  que el numero de la derecha
const resultado8 = 5 <= 5; // segundo ejemplo de menor o igual
const resultado9 = 5 >= 6; // operador de comparacion  mayor que que compara si el numero de la izquierda es mayor o igual al de la derecha
const resultado10 = 5 >= 5; // segunda parte del ejemplo mayor o igual

console.log (resultado7, resultado8, resultado9, resultado10);

// operadores de comparacion  de desigualdad y desigualdad estricta

const resultado11 = 5 !== 6; // operador de comparacion que compara de manera estricta que el numero de la izquierda sea igual al de la derecha
const resultado12 = 5 != '5'; // operador de comparacion  que compara  si el numero de la derecha es igual al de la izquierda asi este sea un string
console.log (resultado11, resultado12);

// operadores LOGICOS  OR ej | |, AND ej &&, NOT ej !

//control de flujo

//control IF y ELSE

const edad = 25;
if (edad > 5 && edad < 18) {
  console.log ('el puede jugar ');
} else {
  console.log ('usted supera la edad permitida ');
}

// ejemplo de condicion IF y ELSE donde sgun el dato dentro de la condicion ( )  sea true o
// false se ejecutara uno de los dos comandos de consola

// control de flujo WHILE

//ejemplo de uso WHILE (mientras) este comando se ejecuta hasta que la condicon que estamos validando cambie
// en el ejemplo creamos la variable X y luego sumamos hasta  y cuando esta condicion se cumple el bucle o loop
// termina
let x = 0;
while (x < 5) {
  console.log (x);
  x++;
}
console.log ('terminado el loop');

//control de flujo Swich
// esta funcion nos permite ejecutar una instruccion u otra instruccion (depende de las instrucciones creadas dendtro del swich)
// dependiendo de el valor o caso que este swich este evaluando
// NOTA: siempre colocar BREAK al terminar cada instruccion para que el caso una vez ejecutado, pare la ejecucion del caso

let y = 2;
switch (y) {
  case 1: {
    console.log ('soy el caso 1');
    break;
  }
  case 2: {
    console.log ('soy el caso 2 ');
    break;
  }
  case 3: {
    console.log ('soy el caso 3 ');
    break;
  }
  default: {
    console.log (' ya no hay casos');
    break;
  }
}

// contrl de instrucion FOR

// es una instruccion similar a while que nos permite  estar dentro de un loop hasta que se completa una instruccion

for (let i = 0; i < 10; i++) {
  console.log (i);
}

// iterar o acceder cada uno de los elementos de un arreglo usando FOR

const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < 10; i++) {
  console.log (i);
}
