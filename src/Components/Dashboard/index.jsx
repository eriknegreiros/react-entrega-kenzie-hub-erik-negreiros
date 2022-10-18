import { Header } from "./style";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import ListTech from "./ListTech";
import { Outlet } from "react-router-dom";
import { TechContext } from "../../Context/TechContext";


const HeaderDash = () => {
  const { user } = useContext(AuthContext);


  return (
    <>
          <>
          <Header>
            <h1>Olá, {user?.name}</h1>
            <span>{user?.course_module}</span>
          </Header>
          <ListTech  />
          <Outlet />
        </>
      
    </>
  );
};

export default HeaderDash;
