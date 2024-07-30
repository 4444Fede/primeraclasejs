/*
Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.
*/

function saludar(){
	console.log('Hola, mundo!')
}
saludar()

/*
Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.
*/

function despedirse(){
	console.log('Adios, mundo!')
}
despedirse()

/*
Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.
*/

function calcularCuadrado(number){
	return number * number 
}
console.log(calcularCuadrado(8))

/*
Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. 
*/

function minutosAHoras(minutes) {
	let hours = minutes / 60
	return hours
}
console.log('44 minutos pasados a horas es: ' + minutosAHoras(44))

/*
Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.
*/

function saludarPersona(name){
	console.log('Hola, ' + name + '.')
}
saludarPersona("Pepe")

/*
Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.
*/

function sumarNumeros(number1, number2){
	let suma = number1 + number2
	return suma
}
console.log(sumarNumeros(2, 2))

/*
Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.
*/

function multiplicarNumeros(number1, number2, number3){
	let suma = number1 * number2 * number3
	return suma
}
console.log(multiplicarNumeros(2, 2, 1))

/*
Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. 
*/

function concatenar3(string1, string2, string3){
	let separator = ' '
	let chainedStrings = string1 + separator + string2 + separator + string3
	return chainedStrings
}
console.log(concatenar3('Hola', 'Julian', ' chau'))

/*
Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.
*/

function promedioDeCuatroNumero(number1, number2, number3, number4) {
	let promedio = (number1 + number2 + number3 + number4) / 4
	return promedio
}
console.log(promedioDeCuatroNumero(6,2,8,0))

/*
Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."
*/

function presentarPersona(name, age){
	let presentation = `Mi nombre es ${name} y tengo ${age} años`
	return presentation
}
console.log(presentarPersona('Agustin', 18))

/*
Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.
*/

function areaRectangulo(width, height) {
	let area = width * height
	return area
}
console.log('El area es: ' + areaRectangulo(2, 2))

/*
Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. 
*/

function calcularPropina(porcentualTip){
    let foodAmount = 4444;
    let tipAmount = foodAmount * (porcentualTip / 100);
    return tipAmount;
}
console.log(calcularPropina(10))

/*
Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.  
*/

function calcularSalario(hoursWorked, wagePerHour){
	salary = hoursWorked * wagePerHour
	return salary
}
console.log(calcularSalario(22, 2))

/*
Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.
*/

function calcularDescuento(precioOriginal){
	let descuento = 0.1
	let finalPrice = precioOriginal - (precioOriginal * descuento)
	return finalPrice
}
console.log('El precio final es: ' + calcularDescuento(1000))

/*
Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.
*/

function evaluarNumero(number){
	let evaluated = (number > 0) ? 'El numero es positivo' :
					(number < 0) ? 'El numero es negativo' :
					'El numero es 0'
	return evaluated
}
console.log(evaluarNumero(4))

/*
Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.
*/ 

function evaluarEdad(age){
	let isAnAdult = (age < 18) ? 'Menor de edad' :
					'Mayor de edad'
	return isAnAdult
}
console.log(evaluarEdad(44))

/*
Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
*/

function esPar(number){
	let evaluatedNumber = (number%2 === 0) ? 'El numero es par' :
						  'El numero es impar'
	return evaluatedNumber
}
console.log(esPar(4))

/*
Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.
*/

function compararNumeros(number1, number2){
	let comparison = (number1 > number2) ? `${number1} es mayor que ${number2}` :
					 (number2 > number1) ? `${number2} es mayor que ${number1}` :
					 'Son iguales'
	return comparison					
}
console.log(compararNumeros(22, 44))

/*
Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.
*/

function sumaEsPar(number1, number2){
	let addition = number1 + number2
	let isAdditionEven = (addition%2 === 0) ? 'La suma es par' :
						 'La suma es impar'
	return isAdditionEven
}
console.log(sumaEsPar(90123, 81381))

/*
Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.
*/

function ambosPositivos(number1, number2){
	let evaluation = (number1 > 0 && number2 > 0) ? 'Ambos son positivos' :
					 (number1 > 0) ? 'El primer numero es positivo' :
					 (number2 > 0) ? 'El segundo numero es positivo' :
					 'Ninguno es positivo'
	return evaluation				
}
console.log(ambosPositivos(-4, 2))

/*
Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.
*/

function calcularImpuesto(income){
	let taxes = (income > 20000) ? `El impuesto a pagar es de: ${income * 0.2}` :
				(income > 10000 && income < 20000) ? `El impuesto a pagar es de: ${income * 0.15}` :
				(income > 10000) ? `El impuesto a pagar es de: ${income * 0.1}` :
				'No debe pagar ningun impuesto'
	return taxes
}
console.log(calcularImpuesto(44444))

/*
Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".
*/

function clasificarNota(grade){
	let classifiedGrade = ''
	if (grade >= 90){
		classifiedGrade = 'A'
	}else if (grade >= 80){
		classifiedGrade = 'B'
	}else if (grade >= 70){
		classifiedGrade = 'C'
	}else if (grade >= 60){
		classifiedGrade = 'D'
	}else{
		classifiedGrade = 'F'
	}
	return classifiedGrade
}
console.log('Tu nota es: ' + clasificarNota(44))