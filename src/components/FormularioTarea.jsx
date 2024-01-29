import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

function FormularioTarea() {
  return (
    <section>
      <Form className="mb-5">
        <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
          <Form.Control type="text" placeholder="Ej: Tarea 1" />
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
