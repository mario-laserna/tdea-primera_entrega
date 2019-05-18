/**
 * Retorna string con los datos del curso para imprimir en consola
 * @param {*} curso 
 */
function cursoToString(curso) {
    return '----------------------------\n' +
        'Id: ' + curso.id + ' - Nombre: ' + curso.nombre + '\n' +
        'Duración: ' + curso.duracion + ' - Valor: ' + curso.valor;
}

/**
 * Recibe arreglo de cursos, los recorre y envía a imprimir en consola
 * @param [] cursos 
 */
function listadoConRetraso(cursos) {
    for (let i = 0; i < cursos.length; i++) {
        setTimeout(() => {
            console.log(cursoToString(cursos[i]));
        }, i * 2000);
    }
}

function personaToString(nombre, cedula) {
    return 'Nombre: ' + nombre +  '\n' +
        'Cédula: ' + cedula + '\n';
}

function escribirArchivo(archivo, texto, fs){
    fs.writeFile(archivo, texto, (err) =>{
        if(err) throw (err);
        console.log('\n\nINSCRIPCIÓN: Se ha creado el archivo de inscripción');
    });
}

module.exports = {
    cursoToString,
    listadoConRetraso,
    personaToString,
    escribirArchivo
}