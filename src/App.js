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
import UserProfile from "./Pages/User/UserProfile";
import EditAccount from "./Pages/User/EditAccount";
import AllUsers from "./Pages/User/AllUsers";
import EditUserAdmin from "./Pages/User/EditUserAdmin";

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
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/editprofile" element={<EditAccount />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/edituser/:id" element={<EditUserAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
