let estudiante = {
	nombre: 'carlos jose',
	edad : 21,
	notas: {
		matematicas : 3,
		ingles : 5,
		programacion : 5
	}
};

let promedioCalculo=(nota1,nota2,nota3)=>((nota1+nota2+nota3)/3);

/*console.log(promedioCalculo(3,5,5));
console.log('el estudiante: '+estudiante.nombre+' tiene el promedio en: '+ promedioCalculo(estudiante.notas.ingles,estudiante.notas.matematicas,estudiante.notas.programacion));*/

module.exports={
	estudiante,
	promedioCalculo
};