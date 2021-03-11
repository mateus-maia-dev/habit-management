import "./App.css";
import { Routes } from "./routes";
import GroupsList from './components/Groups/groupsList'

function App() {
  return (
    <div className="App">
      <Routes />
      <GroupsList/>
    </div>
  );
}

export default App;
