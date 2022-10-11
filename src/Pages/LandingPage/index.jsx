import { Container } from "./style";
import { ContainerInfo } from "./style";
import { ContainerImg } from "./style";
import img from "../../assets/girlCoding.gif";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container>
      <ContainerInfo>
        <h1>KenzieHub</h1>
        <p>
          KenzieHub é uma plataforma de hospedagem de código-fonte e arquivos
          com controle de versão usando o Git. Ele permite que programadores,
          utilitários ou qualquer usuário cadastrado na plataforma contribuam em
          projetos privados e/ou Open Source de qualquer lugar do mundo.
        </p>

        <Link to="/login">
          <button>Logar na Aplicação</button>
        </Link>
      </ContainerInfo>

      <ContainerImg>
        <img src={img} alt="Girl coding" />
      </ContainerImg>
    </Container>
  );
};

export default LandingPage;
