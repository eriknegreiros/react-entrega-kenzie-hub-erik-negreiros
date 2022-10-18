import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
 

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('@TOKEN')

  const [modal, setModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false)
  
const {user, setTechs}= useContext(AuthContext)

  const RegisterTech = async (data) => {
    await api
      .post("/users/techs", data, {
        headers: {Authorization: `Bearer ${token}`}
      })
      .then((res) => {
        toast.success("Tecnologia cadastrada com sucesso");
        navigate("/dashboard");
        console.log(res.data);
        
        setTimeout(() => {
          setModal(false)
          window.location.reload()
        },2500)
        
      })
      .catch((err) => {
        toast.error("Verifique os Dados");
        console.log(err);
      });
  };

  const DeleteTech = async (id) => {
    const filter = user.techs.filter((tech) => tech.id !== id);
    await api
    .delete(`/users/techs/${id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((res) => {
      toast.success("Tecnologia Excluida com sucesso");
      console.log(res.data)
      setTechs(filter)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <TechContext.Provider value={{ RegisterTech, modal, setModal, removeModal, setRemoveModal, DeleteTech }}>
        {children}
      </TechContext.Provider>
    </>
  );
};

export default TechProvider;
