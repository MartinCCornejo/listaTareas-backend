import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="my-4 flex-grow-1">
        <h1 className="text-center display-3 text-light">Lista tareas</h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
