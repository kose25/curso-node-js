const {
	cursos,
	imprimir
} = require('./cursitos');
require('./comandos');
const fs = require('fs');
coso = 'vaino';

let cursoId = cursos.find(function (idcursito) {
	return idcursito.id == idInput;
})

let crearArchivo = () => {
	fs.writeFile('matricula.txt', coso, (err) => {
		if (err) throw (err);
		console.log('el archivo se ha guardado')
	});
}

function resultado() {
	if (cursoId) {
		coso = 'el estudiante ' + nombreInput + '\ncon cedula: ' + cedInput + '\nse ha matriculado al curso ' + cursoId.nombre + ' tiene una duracion de ' + cursoId.duracion + ' horas con un valor de ' + cursoId.valor;
		console.log('se ha realizado la inscripcion');
		crearArchivo();
	} else {
		console.log('el curso no existe');
		imprimir();
	}
}

function inscribir() {
	if (nombreInput != null && idInput != null && cedInput != null) {
		resultado();
	}else{
		imprimir();
	}
}

inscribir();