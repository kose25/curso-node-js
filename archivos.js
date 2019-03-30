const opciones = {
	matematicas: {
		//		default: 0,
		alias: 'm',
		demand : true
	},
	ingles: {
		//		default: 0,
		alias: 'i',
		demand : true
	},
	programacion: {
		//		default: 0,
		alias: 'p',
		demand : true
	}
}
const argv = require('yargs').command('promedio', 'calcular el promedio', opciones).argv

console.log(argv.matematicas);
console.log(argv);
console.log('el promedio es: ' + (argv.m + argv.i + argv.p) / 3);
//console.log('el nombre del estudiante es ' + argv.nombre);
