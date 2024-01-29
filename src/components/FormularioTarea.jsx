import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

function FormularioTarea() {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  return (
    <section>
      <Form className="mb-5">
        <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="dark" type="submit" className="ms-2">
            Agregar
          </Button>{" "}
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
}

export default FormularioTarea;
