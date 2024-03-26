import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState} from "react";
import Swal from "sweetalert2";
import { crearTareaAPI } from "../helpers/queries";

function FormularioTarea() {

  const [tarea,setTarea] = useState("");

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
      <ListaTareas setTarea={setTarea}></ListaTareas>
    </section>
  );
}

export default FormularioTarea;
