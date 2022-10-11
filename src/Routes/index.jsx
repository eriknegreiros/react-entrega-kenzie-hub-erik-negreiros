import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import LandingPage from "../Pages/LandingPage";
import { useState } from "react";

const RoutesMain = () => {
    const [name, setName] = useState("");
    const [module, setModule] = useState("");
  
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={<LandingPage/>}
          />
          <Route
            path="*"
            element={<LandingPage/>}
          />
          <Route
            path="/login"
            element={<Login setName={setName} setModule={setModule} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<Dashboard name={name} module={module} />}
          />
        </Routes>
      </>
    );
  };

  export default RoutesMain