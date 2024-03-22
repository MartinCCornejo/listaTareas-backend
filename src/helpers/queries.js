const URI_TAREA = import.meta.env.VITE_API_TAREA;

// Función para agreagar una tarea 
export async function crearTarea (tareaNueva) {
    try {
        const respuesta = await fetch(URI_TAREA,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tareaNueva)
        });
        console.log(respuesta);
        return respuesta;
        
    } catch (error) {
        console.log(error)
    }
}
