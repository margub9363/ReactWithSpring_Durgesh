import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourse from "./components/Allcourses";
import AddCourse from "./components/AddCourse";

function App() {
  const btnHandle = () => {
    toast.error("done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <ToastContainer />
      <h1>This is bootstrap Component</h1>
      <Home />
      <AllCourse />

      <AddCourse />
    </div>
  );
}

export default App;
