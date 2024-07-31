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

function selectPaymentMethod(paymentMethod, amount){
	console.log(`Metodo de pago: ${paymentMethod}`)
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

function manageOrder(completeName, age, quantity, paymentMethod){
	let unitPrice = 25
	helloCustomer(completeName)
	isClientOldEnough(age)
	let totalAmount = calculateTotalAmount(quantity, unitPrice)
	let totalWithDiscount = seniorDiscount(age, totalAmount)
	selectPaymentMethod(paymentMethod)
	if (paymentMethod === 'Efectivo') {
		totalWithDiscount = paymentMethodDiscount(totalWithDiscount)
	}
	showOrderTime()
	let taxes = coverCharge(totalWithDiscount)
	let finalAmount = totalWithDiscount + taxes
	orderSummary(quantity, totalAmount, totalWithDiscount, taxes, finalAmount)
}
manageOrder('Agustin Pijurria', 17, 40, 'Efectivo')