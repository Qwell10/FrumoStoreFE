import "./App.css";
import Appbar from "./components/Appbar";
import Goods from "./components/Goods";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/login"></Link>
      </div>
      <div>
        <Link to="/welcome"></Link>
      </div>
      <div>
        <Link to="/goods"></Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Appbar />} />
        <Route path="/goods" element={<Goods />} />
      </Routes>
    </Router>
  );
}

export default App;
