import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import LandingPage from "../Pages/LandingPage";

const RoutesMain = () => {
  

  return (
    <> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route
            path="/login"
            element={<Login  />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      
    </>
  );
};

export default RoutesMain;
