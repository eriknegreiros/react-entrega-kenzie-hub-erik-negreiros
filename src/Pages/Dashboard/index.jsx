import { Navbar } from "./style";
import { useNavigate } from "react-router-dom";
import HeaderDash from "../../Components/Dashboard";
import { useState, useContext } from "react";
import AddTechModal from "../../Components/Dashboard/AddtechModal";
import { TechContext } from "../../Context/TechContext";
import RemoveTechModal from "../../Components/Dashboard/RemoveTechModal";

const Dashboard = () => {
  const navigate = useNavigate();

  const {modal, removeModal} = useContext(TechContext)
  

  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {modal ? <AddTechModal /> : ("")}
      {removeModal ? <RemoveTechModal /> : ("")}

      <Navbar>
        <h1>Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </Navbar>

      <HeaderDash
      />
    </>
  );
};

export default Dashboard;
