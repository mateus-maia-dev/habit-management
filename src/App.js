import logo from "./logo.svg";
import "./App.css";
import { Routes } from "./routes";
import { Header } from "./components/Header";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
