import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
import Swal from "sweetalert2";

function FormularioTarea() {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar el state tarea en el arrayTareas
    // spread ...
    setArrayTareas([...arrayTareas, tarea]);

    Swal.fire({
      title: "Bien hecho!",
      text: "La tarea se agrego correctamente",
      icon: "success",
    });

    // Limpiamos el formulario
    setTarea("");
  };

  const borrarTareas = (nombreTarea) => {
    // Borramos la tarea con el metodo filter
    const nuevoArrayTareas = arrayTareas.filter(
      (elementoTarea) => elementoTarea !== nombreTarea
    );

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
        setArrayTareas(nuevoArrayTareas);
      }
    });
  };

  return (
    <section>
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
      <ListaTareas
        arrayTareas={arrayTareas}
        borrarTareas={borrarTareas}
      ></ListaTareas>
    </section>
  );
}

export default FormularioTarea;
