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

  const borrarTareas = (nombreTarea)=> {
    // Borramos la tarea con el metodo filter 
    const nuevoArrayTareas = arrayTareas.filter((elementoTarea)=> elementoTarea !== nombreTarea);
    
    // Actualizamos el state arrayTareas 
    setArrayTareas(nuevoArrayTareas);
  }


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
      <ListaTareas arrayTareas={arrayTareas} borrarTareas={borrarTareas}></ListaTareas>
    </section>
  );
}

export default FormularioTarea;
