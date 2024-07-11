
/*  EJERCICIO 1
	Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido. */

let username = 'Pijurria'

/*  
EJERCICIO 2
Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido. 
*/

const pi = 3.1415926535897932384626433

/*  
EJERCICIO 3
Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido. 
*/

let itsYourBirthday = true

/*  
EJERCICIO 4
Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor sea la concatenación de las dos variables previamente creadas
*/

let name = 'Agustin'
let lastName = 'Iturria'
let fullName = name + lastName

/* 
EJERCICIO 5
Declarar dos variables de tipo number.
Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas. 
*/


let number1 = 4
let number2 = 40

	let addition = number1 + number2
	let subtraction = number1 - number2
	let multiplication = number1 * number2
	let division = number1 / number2
	let remainder = number1 % number2

/* 
EJERCICIO 6
Declarar una variable de tipo number y otra de tipo string. Luego sumar ambas variables y guardar su resultado en una nueva variable. De qué tipo será la tercera variable?
*/

let number = 4444
let phrase = 'Sublime: '
	
	let concatenate_chain = phrase + number // Esto devuelve un string

/* 
EJERCICIO 7
Declarar una variable de tipo booleano cuyo nombre represente su valor. Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada.
*/

let online = true
let away = !online

/* 
EJERCICIO 8
Crear una variable de tipo number. 
Reasignar un nuevo valor a esa misma variable para que sea su valor + 1. 
Repetir la operación anterior utilizando una estrategia diferente
Repetir ambas operaciones con operadores de resta, multiplicación y división.
*/


let numberExercise8 = 4444;

	numberExercise8++;
	numberExercise8 += 1;
	numberExercise8--;
	numberExercise8 -= 1;
	numberExercise8 = numberExercise8 * 2;
	numberExercise8 *= 2;
	numberExercise8 = numberExercise8 / 2;
	numberExercise8 /= 2;

/* 
EJERCICIO 9
Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis?
*/

const taxes = 20
taxes = 10  // OUTPUT: TypeError: Assignment to constant variable.

/* 
EJERCICIO 10
Crear dos variables de tipo string y dos variables de tipo number. 
Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas. 
Repetir el punto anterior utilizando una estrategia diferente.
*/

let firstNumber = 37
let secondNumber = 73
let firstPhrase = 'enano anabolico'
let secondPhrase = 'Lionel Messi el GOAT'

let combinedString1 = firstNumber + ' ' + firstPhrase + ' ' + secondPhrase + ' ' + secondNumber;
let combinedString2 = `${firstNumber} ${firstPhrase} ${secondPhrase} ${secondNumber}`;

/* 
EJERCICIO 11
Crear dos variables de tipo number.
Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
*/

let comparisonNumber1 = -4444
let comparisonNumber2 = 23

let firstComparison = comparisonNumber1 < comparisonNumber2;
let secondComparison = comparisonNumber1 === comparisonNumber2;
let thirdComparison = comparisonNumber2 <= comparisonNumber1;
let fourthComparison = comparisonNumber2 !== comparisonNumber1;

/* 
EJERCICIO 12
Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias. 
*/

const exercise12result = 4
let exercise12number1 = 2
let exercise12number2 = 1000
let exercise12number3 = 996
let exercise12number4 = 37
let exercise12number5 = 33

let multiplicationstring = '4 * 1 = ' + `${exercise12result}` 
let divisionstring = '44 / 11 = ' + exercise12result
let additionstring = `2 + 2 = ${(exercise12number1 + exercise12number1)}`
let subtractionstring = `1000 - 996 = ${(exercise12number2 - exercise12number3)}`
let remainderstring = `37 % 33 = ${(exercise12number4 % exercise12number5)}`

/* 
EJERCICIO 13
Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.
*/

let personalizedTip 
let bill
let tipAmount

bill = 8888
personalizedTip = 5
tipAmount = `Deberia dejar: ${(bill * (personalizedTip / 100))} de propina`

/*
EJERCICIO 14
Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento.
*/

let price
let discount
let finalAmount

price = 5228.235294117647059
discount = 15
finalAmount =  `El precio final es: ${(price - (price * (discount / 100)))}`

/*
EJERCICIO 15
Crea un bloque de código que, tomando el año de nacimiento de una persona, devuelva su edad actual.
*/

let actualYear
let bornYear
let actualAge

actualYear = 2024
bornYear = 2006
actualAge = `Tiene ${actualYear - bornYear} años`

/*
EJERCICIO 16
Crea un bloque de código que, definiendo las variables necesarias, calcule el área de un círculo, un cuadrado y un triángulo.
*/

let squareSide = 2
let squareArea

let triangleBase = 13
let triangleHeight = 19
let triangleArea

// pi has been defined in exercise 2
let circleRadius = 23
let circleArea

squareArea = (squareSide ** 2)
triangleArea = 0.5 * triangleBase * triangleHeight
circleArea = pi * (circleRadius ** 2)

console.log("FIN DIA 4")





















