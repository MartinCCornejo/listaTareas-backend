import {Button,Form } from 'react-bootstrap';

function FormularioTarea() {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
        <Form.Control type="text" placeholder="Ej: Tarea 1" />
        <Button variant="dark" className='ms-2'>Agregar</Button>{' '}
      </Form.Group>
    </Form>
  );
}

export default FormularioTarea;