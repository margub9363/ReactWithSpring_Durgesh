import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourse from "./components/Allcourses";

function App() {
  const btnHandle = () => {
    toast.success("This is my first message");
  };
  return (
    <div>
      <ToastContainer />
      <h1>This is bootstrap Component</h1>
      <Home />
      <AllCourse />
    </div>
  );
}

export default App;
