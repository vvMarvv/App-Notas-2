let funcionesDeTareas = require('./funcionesDeTareas') //funciones que voy a exportar
let process = require('process'); //modulo nativo que requiero para interactuar con la consola
let argumento = process.argv[2]; //en el indice dos de process voy a indicar la accion que quiero realizar

switch(argumento){
    case "listar": //Si ingresa listar, el usuario podra ver todas sus notas
        let tareasJSON = funcionesDeTareas.leerJSON()
        tareasJSON.forEach((tarea) => {
            console.log(tarea);
          });
        break;
        case undefined: //Si el usuario no ingresa nada
        console.log("Atención - Tienes que pasar una acción");
        break;
        case "crear": //Si el usuario quiere crear nuevas notas
            let titulo = process.argv[3]
            let estado = process.argv[4]
            funcionesDeTareas.agregarTarea(titulo, estado);
            break;
        case "filtrar": //Si el usuario puede filtrar sus notas por estado
        let filtro = process.argv[3]
        let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(filtro);

        tareasFiltradas.forEach(tarea => {  //Con esto mostramos al usuario en la consola la lista de tareas que coinciden con el estado ingresado
            console.log("Titulo: " + tarea.título + " Estado: "+ tarea.estado)
        })

        break;
        default: //Si el usuario ingresa cualquier cosa
            console.log("No entiendo qué quieres hacer"); 
        break;
        }