import { Navbar } from "./style";
import { useNavigate } from "react-router-dom";
import HeaderDash from "../../Components/Dashboard";
import { useState } from "react";
import Modal from "../../Components/Dashboard/Modal";

const Dashboard = ({ name, module }) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {modal ? <Modal setModal={setModal} /> : ("")}

      <Navbar>
        <h1>Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </Navbar>

      <HeaderDash
        modal={modal}
        setModal={setModal}
        name={name}
        module={module}
      />
    </>
  );
};

export default Dashboard;
