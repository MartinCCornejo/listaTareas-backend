import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <Container className="my-4 flex-grow-1">
        <h1 className="text-center display-3 text-light mb-4">Lista tareas</h1>
        <FormularioTarea></FormularioTarea>
      </Container>
      <Footer />
    </>
  );
}

export default App;
