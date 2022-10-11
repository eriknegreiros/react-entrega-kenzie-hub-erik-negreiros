import { Navbar } from "./style";
import { useNavigate} from "react-router-dom";
import HeaderDash from "../../Components/Dashboard";

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

      <HeaderDash name={name} module={module}/>
    </>
  );
};

export default Dashboard;
