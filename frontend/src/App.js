import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputPage } from "./pages/InputPage";
import { DiseasePage } from "./pages/DiseasePage";
import { UsagePage } from "./pages/UsagePage";
import { Prescription } from "./pages/Prescription/Prescription";
import LoginForm from "./pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import RequestFeed from "./pages/RequestFeed/RequestFeed";
import OperatorFeed from "./pages/OperatorFeed/OperatorFeed";
import CreateAcc from "./pages/CreateAcc/CreateAcc";
import Chat from "./components/Chat/Chat";
import { useEffect } from "react";
import { loadUser } from "./Actions/UserActions";
import { Request } from "./pages/AcceptedRequest/Request";
import { PrescriptionDownload } from "./pages/PrescriptionDownload/PrescriptionDownload";

function App() {
  const dispatch = useDispatch();

  const { account } = useSelector((state) => state.user);

  useEffect(() => {
    if (!account) {
      dispatch(loadUser());
    }
  }, []);

  return (
    // <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<InputPage />} />
        {/* <Route path="/disease-list/:id" element={<DiseasePage />} /> */}
        <Route path="/request/:id" element={<Request />} />
        <Route path="/usage" element={<UsagePage />} />
        <Route
          path="/prescription/:prescriptionId/:disease"
          element={<Prescription />}
        />
        <Route
          path="/prescription/:prescriptionId/:disease/download"
          element={<PrescriptionDownload />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<CreateAcc />} />
        <Route path="/chat/:prescriptionId" element={<Chat />} />
        <Route path="/allreq" element={<RequestFeed />} />
        <Route path="/operatorfeed" element={<OperatorFeed />} />
      </Routes>
    </Router>
    // </Provider>
  );
}

export default App;
