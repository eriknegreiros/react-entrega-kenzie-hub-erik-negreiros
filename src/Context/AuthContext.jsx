import { createContext, useEffect, useState } from "react";
import api from "../Services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState(null)
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function loadUser() {
      
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          
          
        } catch (error) {
          console.error(error);
          localStorage.clear()
        }
        navigate("/dashboard");
        
      }
    }
    loadUser();
  }, [token]);

  const Login = async (data) => {
    await api
      .post("/sessions", data)
      .then((res) => {
        toast.success("Usúario Logado com Sucesso");

        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        setTechs(res.data.user.techs)

        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2500);
        
      })
      .catch((err) => {
        toast.error("Verifique os Dados");
        console.log(err);
      });
  };

  const Register = async (data) => {
    await api
      .post("/users", data)
      .then((res) => {
        toast.success("Usúario Criado com Sucesso");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
        return res.data;
      })
      .catch((err) => {
        toast.error("Já existe usuário com esses dados");
        console.log(err);
      });
  };

  return (
    <>
      <AuthContext.Provider value={{ Login, Register, user, techs }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
