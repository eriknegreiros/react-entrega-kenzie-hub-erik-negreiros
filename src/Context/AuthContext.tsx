import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../Services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface iAuthContext {
  children: React.ReactNode;
}

interface iData {
  user: iUser | null;
  techs: iTechs[];
  Login: (data: iLogin) => void;
  Register: (data: iRegister) => void;
  setTechs: Dispatch<SetStateAction<iTechs[]>>;
  setUser: Dispatch<SetStateAction<iUser | null>>;
}

interface iUser {
  id: string;
  name: string;
  course_module: string;
  techs: iTechs[] ;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface iResRegister {
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
}

interface iResLogin {
  token: string;
  user: {
    avatar_url: string | null;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    email: string;
    id: string;
    name: string;
    techs: iTechs[];
  };
  updated_at: string;
  works: [];
}

interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const AuthContext = createContext({} as iData);

const AuthProvider = ({ children }: iAuthContext) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iUser | null>(null);
  const [techs, setTechs] = useState<iTechs[]>([]);

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          const { data } = await api.get<iUser>("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.clear();
        }
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
    loadUser();
  }, [token]);

  const Login = async (login: iLogin) => {
    try {
      const { data } = await api.post<iResLogin>("/sessions", login);

      toast.success("Usúario Logado com Sucesso");

      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      setTechs(data.user.techs);

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2500);
    } catch (error) {
      toast.error("Verifique os Dados");
      console.log(error);
    }
  };

  const Register = async (register: iRegister) => {
    try {
      const { data } = await api.post<iResRegister>("/users", register);
      toast.success("Usúario Criado com Sucesso");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
      return data;
    } catch (error) {
      toast.error("Já existe usuário com esses dados");
      console.log(error);
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{ Login, Register, user, techs, setTechs, setUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
