import { ListGroup, Button, Modal, Form } from "react-bootstrap";
import { borrarTareaAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import { useState } from "react";

const ItemTarea = ({ tarea , setTarea}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const respuesta = await crearTareaAPI(tarea);
    
    if (respuesta.status === 201) {
      Swal.fire({
        title: "¡Bien hecho!",
        text: "La tarea se agregó correctamente",
        icon: "success",
      });
      setTarea("");
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "No se pudo agregar la tarea, intente de nuevo en unos minutos...",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="mb-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button
            variant="dark"
            type="submit"
            className="ms-2"
            disabled={tarea.length < 3}
          >
            Agregar
          </Button>{" "}
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      ;
      <ListGroup.Item className="d-flex justify-content-between align-items-center fw-medium box-shadow mb-3 text-break">
        {tarea.nombreTarea}
        <div>
          <Button variant="warning" className="ms-2" onClick={handleShow}>
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger" className="ms-2" onClick={borrarTarea}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default ItemTarea;
