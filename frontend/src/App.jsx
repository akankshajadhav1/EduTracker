import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Auth from "./Components/Auth";
import HomePage from "./Components/HomePage";
import Profilepage from "./Components/Profilepage";
import StudentTable from "./Components/StudentTable";
function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={isLogin ? <Navigate to="/" /> : <Auth />}
        />

        <Route path="/" element={<HomePage />} />
        <Route path="/studenttable" element={<StudentTable />} />

        <Route path="/profile" element={<Profilepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
