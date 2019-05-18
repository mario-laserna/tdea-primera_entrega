const datos = require('./cursos');

function cursoToString(curso) {
    return '----------------------------\n' +
        'Id: ' + curso.id + ' - Nombre: ' + curso.nombre + '\n' +
        'Duración: ' + curso.duracion + ' - Valor: ' + curso.valor;
}

function listadoConRetraso(cursos) {
    for (let i = 0; i < cursos.length; i++) {
        setTimeout(() => {
            console.log(cursoToString(cursos[i]));
        }, i * 2000);
    }
}


listadoConRetraso(datos.cursos);