import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface iTechContext {
  children: React.ReactNode;
}

interface iData {
  modal: boolean;
  removeModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setRemoveModal: React.Dispatch<React.SetStateAction<boolean>>;
  RegisterTech: (data: iRegisterTech) => void;
  DeleteTech: (id: string) => void;
}

export interface iRegisterTech {
  title: string;
  status: string;
}


interface iResRegisterTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
  user: {
    id: string;
  };
}

export const TechContext = createContext({} as iData);

const TechProvider = ({ children }: iTechContext) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  const [modal, setModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  const { techs, setTechs } = useContext(AuthContext);


  const RegisterTech = async (registerTech: iRegisterTech) => { 
    try {
      const {data} = await api.post<iResRegisterTech> ("/users/techs", registerTech, {
        headers: { Authorization: `Bearer ${token}` },
      })
      toast.success("Tecnologia cadastrada com sucesso");
        navigate("/dashboard");
        console.log(data);

        setTechs([data, ...techs]);

        setTimeout(() => {
          setModal(false);
        }, 1500);
    } catch (error) {
      toast.error("Verifique os Dados");
        console.log(error);
    }

  }

const DeleteTech = async (id:string) => {
  try {
    const filter = techs.filter((tech) => tech.id !== id);
    const {data} = await api.delete (`/users/techs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    toast.success("Tecnologia Excluida com sucesso");

        setTechs([data, ...filter]);

        console.log(data);
  } catch (error) {
    console.log(error);
  }
}

  
  return (
    <>
      <TechContext.Provider
        value={{
          RegisterTech,
          modal,
          setModal,
          removeModal,
          setRemoveModal,
          DeleteTech,
        }}
      >
        {children}
      </TechContext.Provider>
    </>
  );
};

export default TechProvider;
