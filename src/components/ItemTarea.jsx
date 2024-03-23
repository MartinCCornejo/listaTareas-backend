import {ListGroup,Button} from "react-bootstrap";
import { borrarTareaAPI } from "../helpers/queries";
import Swal from "sweetalert2";


const ItemTarea = ({tarea}) => {

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
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Tarea borrada!",
                text: "La tarea se elimino correctamente.",
                icon: "success",
              });
              // Actualizamos el state arrayTareas
            }
          });
    }

    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center fs-5 fw-medium box-shadow mb-3 text-break">
            {tarea} <Button variant="danger" className="ms-2" onClick={borrarTarea}><i className="bi bi-trash fs-4" ></i></Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;