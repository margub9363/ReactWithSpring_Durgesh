import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourse from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";

function App() {
  const btnHandle = () => {
    toast.error("done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <h2>This is menu side</h2>
          </Col>
          <Col md={8}>
            <h2>This is container side</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
