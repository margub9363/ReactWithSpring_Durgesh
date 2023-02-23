import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header name="Tannu" />
      <Header name="Margub" />
      <Header name="Rahman" />
      <h1>This is my react app</h1>
      <p>This is my program. I am currently learning react js</p>
      <p>Beacuse I want to develop application that calls my REST api.</p>
    </div>
  );
}

export default App;
