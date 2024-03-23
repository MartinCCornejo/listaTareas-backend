import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

function listaTareas({ arrayTareas,borrarTareas }) {

  // if (arrayTareas.length === 0) {
  //   return <p className="lead fs-1 text-gray text-center">No hay tareas disponibles.</p>;
  // }

  return (
    <ListGroup>
      {/* {
        arrayTareas.map((tarea,posicion) => (<ItemTarea  key={posicion} tarea={tarea} borrarTareas={borrarTareas}></ItemTarea>))
      } */}
    </ListGroup>
  );
}

export default listaTareas;
