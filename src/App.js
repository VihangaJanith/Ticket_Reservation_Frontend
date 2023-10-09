import "./App.css";
import NavBar from "./Component/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
