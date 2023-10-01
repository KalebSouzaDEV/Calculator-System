///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
	visor.value = visor.value + tecla;
}

function limpezatotal() {
	visor.value = "";
}

function calcular() {
	let numeros = visor.value.split(/[^0-9]/)
	let operadores = visor.value.split(/[0-9]/)
	let operador
	operadores.forEach(x => {
		if (x != "")
		operador = x
	});

	visor.value = Calculadora(numeros[0], numeros[1], operador)
}

function Calculadora(number1, number2, operation) {
	let resultado = 0
	switch (operation) {
		case '+':
			resultado = parseInt(number1) + parseInt(number2)
			break;
		case '-':
			resultado = parseInt(number1) - parseInt(number2)
			break;
		case '*':
			resultado = parseInt(number1) * parseInt(number2)
			break;
		case '/':
			resultado = parseInt(number1) / parseInt(number2)
			break;
		case 'e':
			resultado = number1
			for (let index = 0; index < parseInt(number2) - 1; index++) {
				resultado = resultado * parseInt(number1)
			}
			break;
		default:
			break;
	}
	if (resultado > 1000000) {
		resultado = "ERRO"
	}
	return resultado ? resultado : "ERRO"
}