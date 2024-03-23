import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
import { listarTareasAPI } from "../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ListaTareas() {
  const [tareas,setTareas] = useState([]);

  useEffect(()=>{
    listarTareas();
  },[tareas])

  async function listarTareas () {
    const respuesta = await listarTareasAPI();

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setTareas(datos);


    } else {
      Swal.fire({
        title: "¡Error!",
        text: "No se pudieron cargar las tares, espere unos minutos...",
        icon: "error",
      });
    }
  }

  if (tareas.length === 0) {
    return <p className="lead fs-1 text-gray text-center">No hay tareas disponibles.</p>;
  }

  return (
    <ListGroup>
      {
        tareas.map((tarea) => (<ItemTarea  key={tarea.id} tarea={tarea} setTareas={setTareas}></ItemTarea>))
      }
    </ListGroup>
  );
}

export default ListaTareas;
