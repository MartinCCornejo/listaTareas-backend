import { ListGroup, Button } from "react-bootstrap";
import { borrarTareaAPI, listarTareasAPI } from "../helpers/queries";
import Swal from "sweetalert2";

const ItemTarea = ({ tarea,setTareas }) => {

  const borrarTarea = () => {
    Swal.fire({
      title: "Estas seguro de borrar esta tarea?",
      text: "Luego no podras revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(tarea.id);
        if (respuesta.status === 200) {
            Swal.fire({
                title: "Tarea eliminada",
                text: `La tarea '${tarea.nombreTarea}' fue eliminada correctamente`,
                icon: "success",
            });

        } else {
            Swal.fire({
                title: "Ocurrio un error!",
                text: `La tarea '${tarea.nombreTarea}' NO fue eliminada, intente esta operación en unos minutos.`,
                icon: "error",
              });
        }
        // Actualizamos el state arrayTareas
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center fs-5 fw-medium box-shadow mb-3 text-break">
      {tarea.nombreTarea}
      <Button variant="danger" className="ms-2" onClick={borrarTarea}>
        <i className="bi bi-trash fs-4"></i>
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
