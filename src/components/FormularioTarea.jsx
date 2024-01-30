import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

function FormularioTarea() {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Desde el evento submit')

    // Guardar el state tarea en el arrayTareas 
    // spread ... 
    setArrayTareas([...arrayTareas,tarea]); 

    // Limpiamos el formulario 
    setTarea('');
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
