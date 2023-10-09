import "./App.css";
import NavBar from "./Component/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import TrainsList from "./Pages/Train Management/TrainsList";
import AddTrain from "./Pages/Train Management/AddTrain";
import AllTrains from "./Pages/Train Management/AllTrains";
import EditTrain from "./Pages/Train Management/EditTrain";
import ViewAllBooking from "./Pages/Booking/ViewAllBooking";
import ViewMyBookings from "./Pages/Booking/ViewMyBookings";
import BookingCreate from "./Pages/Booking/BookingCreate";
import BookingUpadate from "./Pages/Booking/BookingUpadate";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trainsList" element={<TrainsList />} />
          <Route path="/addtrain" element={<AddTrain />} />
          <Route path="/alltrains" element={<AllTrains />} />
          <Route path="/edittrain/:id" element={<EditTrain />} />
          <Route path="/allbookings" element={<ViewAllBooking />} />
          <Route path="/mybookings/:id" element={<ViewMyBookings />} />
          <Route path="/addbooking" element={<BookingCreate />} />
          <Route path="/editbooking/:id" element={<BookingUpadate />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
