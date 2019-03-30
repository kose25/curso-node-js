const opciones = {
	id: {
		//		default: 0,
		alias: 'i',
		demand: true
	},
	nombre: {
		//		default: 0,
		alias: 'n',
		demand: true
	},
	cedula: {
		//		default: 0,
		alias: 'c',
		demand: true
	}
}

const argv = require('yargs').command('inscribir', 'inscribase en un cursito', opciones).argv

idInput = argv.i;
nombreInput = argv.n;
cedInput = argv.c;
commandsd = argv;
