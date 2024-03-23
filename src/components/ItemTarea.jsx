import {ListGroup,Button} from "react-bootstrap";


const ItemTarea = ({tarea,borrarTareas}) => {

    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center fs-5 fw-medium box-shadow mb-3 text-break">
            {/* {tarea} <Button variant="danger" onClick={()=> borrarTareas(tarea)} className="ms-2"><i className="bi bi-trash fs-4" ></i></Button> */}
        </ListGroup.Item>
    );
};

export default ItemTarea;