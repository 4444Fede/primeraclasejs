function askName(){
	let name = window.prompt("Ingrese su nombre").toLowerCase().trim()
	while (!isNaN(name) || name.length < 0 || name.length > 30) {
		name = window.prompt("Por favor ingrese un nombre valido").toLowerCase().trim()
	}
	console.log(`Nombre ingresado: ${name}`)
	return name
}

function askSurname(){
	let surname = window.prompt("Ingrese su apellido").toLowerCase().trim()
	while (!isNaN(surname) || surname.length < 0 || surname.length > 30) {
		surname = window.prompt("Por favor ingrese un apellido valido").toLowerCase().trim()
	}
	console.log(`Apellido ingresado: ${surname}`)
	return surname
}

function askAge(){
	let age = window.prompt("Ingrese su edad")
	while (age === null || isNaN(age) || age <= 0 || age > 115) {
		age = window.prompt("Por favor ingrese una edad valida")
	}
	console.log(`Edad ingresada: ${age.trim()}`)
	return age
}

function askPaymentMethod(){
	let paymentMethod = window.prompt('Ingrese el metodo de pago').toLowerCase().trim()
	while(paymentMethod !== 'efectivo' && paymentMethod !== 'credito' && paymentMethod !== 'debito'){
		paymentMethod = window.prompt('Ingrese un metodo de pago valido por favor (Efectivo, credito, debito').toLowerCase().trim()
	}
	console.log(`Metodo de pago seleccionado: ${paymentMethod}`)
	return paymentMethod
}

function askQuantity(){
	let quantity = window.prompt("Ingrese la unidades deseadas")
	while (isNaN(quantity) || quantity < 0) {
		quantity = window.prompt("Por favor ingrese una cantidad valida")
	}
	console.log(`Cantidad seleccionada: ${quantity.trim()}`)
	return quantity
}

function askProduct(){
	let product = window.prompt(`Ingrese el producto deseado, puede consultar la lista de productos a continuacion: \n-Manzana \n-Banana \n-Naranja \n-Durazno \n-Frutilla \n-Kiwi`).toLowerCase().trim()
	while (product.toLowerCase() !== 'manzana' && product !== 'banana' && product !== 'naranja' && product !== 'durazno' && product !== 'frutilla' && product !== 'kiwi'){
		product = window.prompt(`Producto invalido, consulte la lista de productos disponibles a continuacion: \n-Manzana \n-Banana \n-Naranja \n-Durazno \n-Frutilla \n-Kiwi`).toLowerCase().trim()
	}
	console.log(`Producto seleccionado: ${product}`)
	switch (product){
    case 'manzana':
        unitPrice = 10
        break;
    case 'banana':
        unitPrice = 20
        break;
    case 'naranja':
        unitPrice = 15
        break;
    case 'durazno':
        unitPrice = 25
        break;
    case 'frutilla':
        unitPrice = 13
        break;
    case 'kiwi':
        unitPrice = 44
        break;
	}
	return unitPrice
}

function helloCustomer(completeName){
	console.log(`Hola, ${completeName}, esperemos disfrutes del servicio!!`)
}

function isClientOldEnough(age){
	if (age < 18){
		console.log('No podras pedir bebidas alcoholicas')
	}
}

function calculateTotalAmount(quantity, unitPrice){
	return totalAmount = quantity * unitPrice
}

function seniorDiscount(age, totalAmount){
	if (age >= 60) {
		return totalAmountWithDiscount = totalAmount * 0.9
	}else{
		return totalAmount
	}
}

function paymentMethodDiscount(amount){
	return amount = amount * 0.9
}

function showOrderTime(){
	//---------HORA DEL DIA------------
	let time = new Date().getHours();
	//---------------------------------
	if (time >= 12 && time <= 14){
		console.log('Dada la hora, le advertimos que puede haber demoras con su pedido')
	}
}

function coverCharge(amount){
	return taxes = amount * 0.05
}

function orderSummary(quantity, totalAmount, totalWithDiscount, taxes, finalAmount){
	if (totalWithDiscount != totalAmount) {
		summary = `Pedido: ${quantity} productos \nPrecio: ${totalAmount} \nPrecio con descuento: ${totalWithDiscount} \nImpuestos: ${taxes} \nPrecio final: ${finalAmount}`
	}else{
		summary = `Pedido: ${quantity} productos \nPrecio: ${totalAmount} \nImpuestos: ${taxes} \nPrecio final: ${finalAmount}`
	}
	console.log(summary)
}

function manageOrder(){
	let name = askName()
	let surname = askSurname()
	let completeName = `${name} ${surname}`
	let age = askAge()
	let paymentMethod = askPaymentMethod()
	let unitPrice = askProduct()
	let quantity = askQuantity()

	helloCustomer(completeName)
	isClientOldEnough(age)
	let totalAmount = calculateTotalAmount(quantity, unitPrice)
	let totalWithDiscount = seniorDiscount(age, totalAmount)
	if (paymentMethod === 'efectivo') {
		totalWithDiscount = paymentMethodDiscount(totalWithDiscount)
	}
	showOrderTime()
	let taxes = coverCharge(totalWithDiscount)
	let finalAmount = totalWithDiscount + taxes
	orderSummary(quantity, totalAmount, totalWithDiscount, taxes, finalAmount)
}

manageOrder()