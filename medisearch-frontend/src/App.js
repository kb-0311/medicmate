import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputPage } from "./pages/InputPage";
import { DiseasePage } from "./pages/DiseasePage";
import { UsagePage } from "./pages/UsagePage";
import { Prescription } from "./pages/Prescription/Prescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<InputPage />} />
        <Route path="/disease-list" element={<DiseasePage />} />
        <Route path="/usage" element={<UsagePage />} />
        <Route path="/prescription/1123" element={<Prescription/>} />
      </Routes>
    </Router>
  );
}

export default App;
