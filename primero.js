/*
function promedio(nota1, nota2, nota3) {
	let resultado = (nota1 + nota2 + nota3) / 3;
	console.log('el promedio 1 es: ' + resultado);
}
*/

let promedio2 = (nota1, nota2, nota3, callback) => {
	setTimeout(function () {
		let resultado = (nota1 + nota2 + nota3) / 3;
//		console.log('el promedio 2 es: ' + resultado);
		callback(resultado);
	}, 5000);
}

//let promedioFlecha = (nota1, nota2, nota3) => console.log('el promedio flecha es: ' + (nota1 + nota2 + nota3) / 3);

promedio2(3,6,47, function(resultado){
	console.log(resultado);
})

/*
promedio2(5, 6, 1);
promedio(4, 5, 3);
promedioFlecha(4, 5, 3);
*/
