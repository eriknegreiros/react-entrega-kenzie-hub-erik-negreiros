import { Navbar } from "./style";
import { Header } from "./style";
import { useNavigate} from "react-router-dom";

const Dashboard = ({ name, module }) => {

const navigate = useNavigate()

const logout = () => {
    window.localStorage.clear()
    navigate('/login') 
    window.location.reload('/login') 
}


  return (
    <>
      <Navbar>
        <h1>Kenzie Hub</h1>
       <button onClick={logout}>Sair</button>
      </Navbar>

      <Header>
        <h1>Olá,{name}</h1>
        <span>{module}</span>
      </Header>
    </>
  );
};

export default Dashboard;
