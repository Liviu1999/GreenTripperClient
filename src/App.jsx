import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import Worked from "../Components/Worked";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/worked" element={<Worked />} />
      </Routes>
    </Router>
  );
}

export default App;
