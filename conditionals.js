/*
EJERCICIOS IF

Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
*/

let numberA = 13
let numberB = 7
if (numberA > numberB) {
	console.log("El numero A es mayor a B")
}

/*
Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.
*/

let age = 15
let alcoholismAge = 18
if (age < alcoholismAge) {
	console.log("Todavia no podes tomar alcohol")
}

/*
Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
*/

let firstNumber = 4444
let secondNumber = 44
let firstGreaterSecond = false
if (firstNumber > secondNumber) {
	firstGreaterSecond = true
	console.log(firstGreaterSecond)
}

/*
Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.
*/

let firstName = "Agustin"
let secondName = "Tomas"
if (firstName === secondName) {
	console.log(firstName)
}

/*
Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.
*/

let thirdName = "Agustin"
let fourthName = "Tomas"
if (thirdName != fourthName) {
	console.log("Los nombres son diferentes")
}

/*
Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
*/

let randomNumberOne = -354
if (randomNumberOne < 0) {
	console.log(randomNumberOne)
}

/*
Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
*/

let randomNumberTwo = 44
if (randomNumberTwo >= 0) {
	console.log(randomNumberTwo)
}

/*
EJERCICIOS ELSE IF

Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
*/

let randomNumberThree = 444
if (randomNumberThree%2 === 0) {
	console.log("El numero es par")
}else{
	console.log("El numero es impar")
}

/*
Crea un bloque de código que imprima en consola si el numero ingresado es positivo o negativo.
*/

let randomNumberFour = -13
if (randomNumberFour > 0) {
	console.log("El numero es positivo")
}else{
	console.log("El numero es negativo")
}

/*
Crea un bloque de codigo que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.
*/

let randomLetter = 'F'
if (randomLetter === 'A' || randomLetter === 'E' || randomLetter === 'I' || randomLetter === 'O' || randomLetter === 'U') {
	console.log("La letra es una vocal")
}else{
	console.log("La letra es una consonante")
}

/*
Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
*/

let randomName = 'Pepe'
if (randomName === 'Pedro') {
	console.log("Hola Pedro, como estás?")
}else{
	console.log("Hola! Como te llamas?")
}

/*
Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.
*/

let examGrade = 6
if (examGrade >= 7) {
	console.log("Estas aprobado")
}else{
	console.log("Estas desaprobado")
}

/*
EJERCICIOS ELSE IF

Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.
*/

let randomNumberFive = 29
if (randomNumberFive < 10) {
	console.log("El numero es menor a 10")
}else if (randomNumberFive > 50){
	console.log("El numero es mayor a 50")
}else{
	console.log("El numero esta entre 10 y 50")
}

/*
Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.
*/

let randomNumberSix = 29
let randomNumberSeven = 35
if (randomNumberSix < 10 && randomNumberSeven < 10) {
	console.log(randomNumberSix * randomNumberSeven)
}else if (randomNumberSix > 50 && randomNumberSeven > 50){
	console.log(randomNumberSix * randomNumberSeven)
}else{
	console.log(randomNumberSix - randomNumberSeven)
}

/*
Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. 
Por ejemplo: 1 = ‘lunes’.
*/

let numberBetweenOneAndSeven = 4
if (numberBetweenOneAndSeven === 1) {
	console.log("El dia es Lunes")
}else if (numberBetweenOneAndSeven === 2){
	console.log("El dia es Martes")
}else if (numberBetweenOneAndSeven === 3){
	console.log("El dia es Miercoles")
}else if (numberBetweenOneAndSeven === 4){
	console.log("El dia es Jueves")
}else if (numberBetweenOneAndSeven === 5){
	console.log("El dia es Viernes")
}else if (numberBetweenOneAndSeven === 6){
	console.log("El dia es Sabado")
}else if (numberBetweenOneAndSeven === 7){
	console.log("El dia es Domingo")
}else{
	console.log("El numero no corresponde a ningun dia de la semana")
}

/*
Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.
*/

let randomNumerEight = 44444444
if (randomNumerEight%2 === 0 && randomNumerEight%3 === 0) {
	console.log("El numero es divisible por 2 y por 3")
}else if (randomNumerEight%2 === 0) {
	console.log("El numero es divisible por 2")
}else if (randomNumerEight%3 === 0){
	console.log("El numero es divisible por 3")
}else{
	console.log("El numero no es divisible ni por 2 ni por 3")
}

/*
Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.
*/

let numberBetweenOneAndTwelve = 10
if (numberBetweenOneAndTwelve === 1) {
	console.log("El mes es Enero")
}else if (numberBetweenOneAndTwelve === 2){
	console.log("El mes es Febrero")
}else if (numberBetweenOneAndTwelve === 3){
	console.log("El mes es Marzo")
}else if (numberBetweenOneAndTwelve === 4){
	console.log("El mes es Abril")
}else if (numberBetweenOneAndTwelve === 5){
	console.log("El mes es Mayo")
}else if (numberBetweenOneAndTwelve === 6){
	console.log("El mes es Junio")
}else if (numberBetweenOneAndTwelve === 7){
	console.log("El mes es Julio")
}else if (numberBetweenOneAndTwelve === 8){
	console.log("El mes es Agosto")
}else if (numberBetweenOneAndTwelve === 9){
	console.log("El mes es Septiembre")
}else if (numberBetweenOneAndTwelve === 10){
	console.log("El mes es Octubre")
}else if (numberBetweenOneAndTwelve === 11){
	console.log("El mes es Noviembre")
}else if (numberBetweenOneAndTwelve === 12){
	console.log("El mes es Diciembre")
}else{
	console.log("El numero no corresponde a ningun mes")
}

/*
EJERCICIOS SWITCH

Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.
*/

switch (numberBetweenOneAndSeven){
	case 1:
		console.log("El dia es Lunes")
		break;
	case 2:
		console.log("El dia es Martes")
		break;
	case 3:
		console.log("El dia es Miercoles")
		break;
	case 4:
		console.log("El dia es Jueves")
		break;
	case 5:
		console.log("El dia es Viernes")
		break;
	case 6:
		console.log("El dia es Sabado")
		break;
	case 7:
		console.log("El dia es Domingo")
		break;
	default:
		console.log("El numero no corresponde a ningun dia de la semana")
		break;
}

/*
Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.
*/

let gender = 'X'
switch (gender){
	case 'H':
		console.log("Su genero es Hombre")
		break;
	case 'M':
		console.log("Su genero es Mujer")
		break;
	case 'X':
		console.log("Su genero es No Binario")
		break;
	default:
		console.log("Su genero no se encuentra en nuestro sistema")
		break;	
}

/*
Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 
*/

let numberBetweenOneAndTen = 7
switch (numberBetweenOneAndTen){
	case 1:
		console.log("Uno")
		break;
	case 2:
		console.log("Dos")
		break;
	case 3:
		console.log("Tres")
		break;
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
		console.log("Mayor a 3")
		break;
	default:
		console.log("El numero no esta entre 1 y 10")
		break;
}

/*
Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
*/

let randomLetter2 = 'X'
switch (randomLetter2){
	case 'A':
	case 'E':
	case 'I':
	case 'O':
	case 'U':
		console.log("La letra es una vocal")
		break;
	case 'Q':
	case 'W':
	case 'R':
	case 'T':
	case 'Y':
	case 'P':
	case 'S':
	case 'D':
	case 'F':
	case 'G':
	case 'H':
	case 'J':
	case 'K':
	case 'L':
	case 'Z':
	case 'X':
	case 'C':
	case 'V':
	case 'B':
	case 'N':
	case 'M':
		console.log("La letra es una consonante")
		break;
	default:
		console.log("La letra es un caracter especial")
		break;
}

/*
Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.
*/

let numberBetweenOneAndFour = 3
switch (numberBetweenOneAndFour){
	case 1:
		console.log("La estacion del año es Verano")
		break;
	case 2:
		console.log("La estacion del año es Otoño")
		break;
	case 3:
		console.log("La estacion del año es Invierno")
		break;
	case 4:
		console.log("La estacion del año es Primavera")
		break;
	default:
		console.log("El numero ingresado no esta entre 1 y 4")
		break;
}

/*
EJERCICIOS TERNARIOS 

Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.
*/

let oldEnough = (age >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(oldEnough)

/*
Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.
*/

let evenOrOdd = (randomNumberTwo%2 === 0) ? "El numero es par" : "El numero es impar";
console.log(evenOrOdd)

/*
Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.
*/

let whatNumberIsGreater = (randomNumberFive > randomNumberSeven) ? "El quinto numero random es mayor al septimo" : "El septimo numero random es mayor al quinto"
console.log(whatNumberIsGreater)

/*
Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.
*/

let whatDayItIs = (numberBetweenOneAndSeven === 1) ? "El dia es Lunes" :
                (numberBetweenOneAndSeven === 2) ? "El dia es Martes" :
                (numberBetweenOneAndSeven === 3) ? "El dia es Miércoles" :
                (numberBetweenOneAndSeven === 4) ? "El dia es Jueves" :
                (numberBetweenOneAndSeven === 5) ? "El dia es Viernes" :
                (numberBetweenOneAndSeven === 6) ? "El dia es Sabado" :
                (numberBetweenOneAndSeven === 7) ? "El dia es Domingo" :
                "Número inválido";

console.log(whatDayItIs);

/*
Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.
*/

let whatIsTheNumber = (randomNumerEight > 0) ? "El numero es positivo" :
               		(randomNumerEight < 0) ? "El numero es negativo" :
               		(randomNumerEight === 0) ? "El numero es cero" :
                	"Número inválido";

console.log(whatIsTheNumber)   

/*
Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.
*/

let numberBetweenOneAndOneHundred = 75
let isMultipleOfThreeAndFive = (numberBetweenOneAndOneHundred%3 === 0 && numberBetweenOneAndOneHundred%5 === 0) ? "El numero es multiplo de 3 y 5" :
	"El numero no es multiplo de 3 y 5"
console.log(isMultipleOfThreeAndFive)

/*
EJERCICIOS PRACTICAS

Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.
*/


let exercise1 = 'El numero es '

if (numberBetweenOneAndOneHundred%2 === 0) {
	exercise1 += 'multiplo de 2 '
} 
if (numberBetweenOneAndOneHundred%3 === 0) {
	exercise1 += 'multiplo de 3 '
} 
if (numberBetweenOneAndOneHundred%5 === 0) {
	exercise1 += 'multiplo de 5 '
} 
if (exercise1 === 'El numero es ') {
	exercise1 = 'El numero no es divisible por ninguno'
}
console.log(exercise1)

/*
Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.
*/

let exercise2 = 'El numero es '
let numberBetweenOneAndOneThousand = 683

if (numberBetweenOneAndOneThousand%2 === 0) {
	exercise2 += 'es par es multiplo de 2 '
}else{
	exercise2 += 'es impar '
}
if (numberBetweenOneAndOneThousand%3 === 0) {
	exercise2 += 'es multiplo de 3 '
}
if (numberBetweenOneAndOneThousand%5 === 0) {
	exercise2 += 'es multiplo de 5 '
}
if (numberBetweenOneAndOneThousand > 50) {
	exercise2 += 'es mayor a 50 '
}else if (numberBetweenOneAndOneThousand < 50) {
	exercise2 += 'es menor a 50 '
}
if (exercise2 === 'El numero es ') {
	exercise2 = 'El numero no cumple con ninguna de las condiciones'
}
console.log(exercise2)