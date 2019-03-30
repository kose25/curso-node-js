let cursos = [{
		id: 0,
		nombre: 'node.js',
		duracion: 32,
		valor: 0
},
	{
		id: 1,
		nombre: 'ingles',
		duracion: 48,
		valor: 20000
		   },
	{
		id: 2,
		nombre: 'bolsa de valores',
		duracion: 22,
		valor: 33000
			 }];

function imprimir() {
	j = 0;
	for (i = 1; i <= cursos.length; i++) {
		setTimeout(function () {
			texto = '';
			texto += 'el curso se llama: ' + cursos[j].nombre + ' con id: ' + cursos[j].id + ' tiene una duracion de: ' + cursos[j].duracion + ' horas con un valor de: ' + cursos[j].valor + '\n';
			console.log(texto);
			j++;
		}, 2000 * i);
	}
}

module.exports = {
	cursos,
	imprimir
}
