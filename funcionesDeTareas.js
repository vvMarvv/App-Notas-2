let fs = require('fs');

let modTarea = {
    archivo: './tareas.json', // Propiedad que guarda el nombre del archivo json
    leerJSON : () => { // Método que retorna el json parseado
        let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(tareasJSON);
    },
    escribirJSON : informacion => {  //Metodo que guarda la info en tareas.json
    let nuevoJSON = JSON.stringify(informacion)
    fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8');
    }, 
    agregarTarea : (titulo, estado) => { //Esta funcion es para agregar una nueva tarea en la app
        tareasAnteriores = module.exports.leerJSON() //Este es el array original
        let nuevaTarea = {  // Este es el nuevo objeto para agregar en el array original
            titulo : titulo,
            estado : estado
        }
        tareasAnteriores.push(nuevaTarea) // Acá agrego el nuevo objeto al final del array original
        module.exports.escribirJSON(tareasAnteriores)

    },
    guardarTarea: (titulo, estado) => {  //Las tareas que vayamos recibiendo se guardaran junto con los demás de tareas.json
        let tareasAnteriores = leerJSON();
        console.log(tareasAnteriores)
        let nuevaTarea = {
            titulo: titulo,
            estado: estado
        }
        tareasAnteriores.push(nuevaTarea);
        escribirJSON(tareasAnteriores);
    },

    filtrarPorEstado: estado => {  //Filtramos las tareas por estado
        let tareas = modTarea.leerJSON();
        return tareas.filter(tarea => tarea.estado == estado); //Acá usamos el método filter. Si tarea.estado es igual al estado, me retorna la tarea
    }
}

module.exports = modTarea;