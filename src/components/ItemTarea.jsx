import {ListGroup,Button} from "react-bootstrap";


const ItemTarea = ({tarea,borrarTareas}) => {

    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center fs-5 fw-medium box-shadow mb-3">
            {tarea} <Button variant="danger" onClick={()=> borrarTareas(tarea)}><i class="bi bi-trash fs-5" ></i></Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;