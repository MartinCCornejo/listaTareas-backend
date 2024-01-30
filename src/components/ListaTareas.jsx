import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

function listaTareas({ arrayTareas,borrarTareas }) {
  return (
    <ListGroup>
      {
        arrayTareas.map((tarea,posicion) => (<ItemTarea key={posicion} tarea={tarea} borrarTareas={borrarTareas}></ItemTarea>))
      }
    </ListGroup>
  );
}

export default listaTareas;
