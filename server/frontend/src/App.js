import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // Added this line
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
