import "./App.css";
import NavBar from "./Component/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import TrainsList from "./Pages/Train Management/TrainsList";
import AddTrain from "./Pages/Train Management/AddTrain";
import AllTrains from "./Pages/Train Management/AllTrains";
import EditTrain from "./Pages/Train Management/EditTrain";
import RegisterUser from "./Pages/Admin/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trainsList" element={<TrainsList />} />
          <Route path="/addtrain" element={<AddTrain />} />
          <Route path="/alltrains" element={<AllTrains />} />
          <Route path="/edittrain/:id" element={<EditTrain />} />
          <Route path="/admin" element={<RegisterUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
