import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

function listaTareas({ arrayTareas }) {
  return (
    <ListGroup>
      {
        arrayTareas.map((tarea,posicion) => (<ItemTarea key={posicion} tarea={tarea}></ItemTarea>))
      }
    </ListGroup>
  );
}

export default listaTareas;
