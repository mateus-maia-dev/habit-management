import logo from "./logo.svg";
import "./App.css";
import { Routes } from "./routes";
import CreateHabit from "./components/CreateHabit";

function App() {
  return (
    <div className="App">
      <Routes />
      <CreateHabit />
    </div>
  );
}

export default App;
