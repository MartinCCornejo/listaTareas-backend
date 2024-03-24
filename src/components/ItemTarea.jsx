import React, { useState } from "react";
import { ListGroup, Button, Modal, Form } from "react-bootstrap";
import { borrarTareaAPI, editarTareaAPI } from "../helpers/queries";
import Swal from "sweetalert2";

const ItemTarea = ({ tarea, setTarea }) => {
  const [show, setShow] = useState(false);
  const [tareaEditada, setTareaEditada] = useState({
    id: tarea.id,
    nombreTarea: tarea.nombreTarea,
  });

  const handleClose = () => {
    setShow(false);
    setTareaEditada({ id: tarea.id, nombreTarea: tarea.nombreTarea });
  };
  const handleShow = () => setShow(true);

  const borrarTarea = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar esta tarea?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
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
            title: "Error",
            text: `La tarea '${tarea.nombreTarea}' no pudo ser eliminada. Inténtalo de nuevo más tarde.`,
            icon: "error",
          });
        }
      }
    });
  };

  const guardarCambios = async () => {
    const respuesta = await editarTareaAPI(
      tareaEditada.nombreTarea,
      tareaEditada.id
    );

    if (respuesta.status === 200) {
      handleClose(); // Cerrar modal después de editar la tarea
      Swal.fire({
        title: "Tarea editada",
        text: "La tarea se editó correctamente",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo editar la tarea. Inténtalo de nuevo más tarde.",
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
          <Form>
            <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
              <Form.Control
                type="text"
                value={tareaEditada.nombreTarea}
                onChange={(e) =>
                  setTareaEditada({
                    ...tareaEditada,
                    nombreTarea: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={guardarCambios}
            disabled={tareaEditada.nombreTarea.length < 3}
            type="submit"
          >
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>

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
