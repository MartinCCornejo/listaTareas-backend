const URI_TAREA = import.meta.env.VITE_API_TAREA;

// Función para agreagar una tarea 
export async function crearTareaAPI (nombreTarea) {
    try {
        const respuesta = await fetch(URI_TAREA,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nombreTarea})
        });
        return respuesta;
        
    } catch (error) {
        console.log(error);
    }
}

export async function listarTareasAPI () {
    try {
        const respuesta = await fetch(URI_TAREA);
        return respuesta;

    } catch (error) {
        console.log(error)
    }
}

export async function borrarTareaAPI (id){
    try {
        const respuesta = await fetch(`${URI_TAREA}/${id}`,{
            method: "DELETE"
        })
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}