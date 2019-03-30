//const estudiante1 = require('./calculos');



const {
	estudiante,
	promedioCalculo
} = require('./calculos');

const fs = require('fs');

//console.log('el promedio del estudiante ' + estudiante.nombre + ' es: ' + promedioCalculo(estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion));

let {
	nombre,
	edad: edadsita,
	notas: {
		matematicas,
		ingles,
		programacion
	}
} = estudiante;

let crearArchivo = () => {
	fs.writeFile('archivo.txt', imprimir(), (err) => {
		if (err) throw (err);
		console.log('el archivo se ha guardado xd')
	});
}

function imprimir() {
	texto = 'en nombre del estudiante es: ' + nombre + '\n' + 'el promedio del estudiante ' + nombre + ' es: ' + promedioCalculo(ingles, matematicas, programacion) + '\n' + 'la edad del estudiante es: ' + edadsita + ' años';

	return texto;
}

crearArchivo(estudiante);
console.log(imprimir());
/*console.log('en nombre del esrudante es: ' + nombre);
console.log('el promedio del estudiante ' + nombre + ' es: ' + promedioCalculo(ingles, matematicas, programacion));
console.log('la edad del estudiante es: '+ edadsita + ' años');*/

//console.log(estudiante1.estudiante);

/*console.log('el promedio de estuciantes es: '+ estudiante1.promedioCalculo(estudiante1.estudiante.notas.ingles, estudiante1.estudiante.notas.matematicas, estudiante1.estudiante.notas.programacion));*/
