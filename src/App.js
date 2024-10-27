import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { AdminLogin } from "./components/Pages/AdminLogin";
import { Login } from "./components/Pages/Login";
import { About } from "./components/Pages/About";
import {SignUp} from "./components/Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />

          </Routes>
          
        </div>
      </Router>
  </>
  );
}

export default App;
