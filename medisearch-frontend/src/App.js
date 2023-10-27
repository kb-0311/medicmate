import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputPage } from "./pages/InputPage";
import { DiseasePage } from "./pages/DiseasePage";
import { UsagePage } from "./pages/UsagePage";
import { Prescription } from "./pages/Prescription/Prescription";
import LoginForm from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import RequestFeed from "./pages/RequestFeed/RequestFeed";
import OperatorFeed from "./pages/OperatorFeed/OperatorFeed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<InputPage />} />
        <Route path="/disease-list" element={<DiseasePage />} />
        <Route path="/usage" element={<UsagePage />} />
        <Route path="/prescription/:id" element={<Prescription />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allreq" element={<RequestFeed />} />
        <Route path="/operatorfeed" element={<OperatorFeed/>} />
      </Routes>
    </Router>
  );
}

export default App;
