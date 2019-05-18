const datos = require('./cursos');
const funciones = require('./funciones');
const fs = require('fs');

//Opciones para capturar comando de ejecucion en consola
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre : {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('inscribir', 'Proceso de inscripción a curso', opciones)
    .argv;

if(argv._.length <= 0) {
    funciones.listadoConRetraso(datos.cursos);
}else {
    let id = argv.id;
    let curso = datos.cursos.find( curso => curso.id == id);

    // Verifica que el curso exista
    if (!curso) {
        console.log('\n');
        console.log('ERROR: Curso no encontrado');
        console.log('\n');
        console.log('Listado de cursos disponibles');

        funciones.listadoConRetraso(datos.cursos);
    }else {
        //Escribe archivo con datos del usuario y del curso seleccionado

        console.log('\nSe realizará la inscripción al curso');
        let infoCurso = funciones.cursoToString(curso);
        console.log(infoCurso);

        let textoParaArchivo = funciones.personaToString(argv.nombre, argv.cedula) + infoCurso;

        funciones.escribirArchivo('inscripcion.txt', textoParaArchivo, fs);

    }

}
