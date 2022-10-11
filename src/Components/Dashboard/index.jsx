import { Header } from "./style";

const HeaderDash = ({ name, module }) => {

      return (
        <>  
          <Header>
            <h1>Olá, {name}</h1>
            <span>{module}</span>
          </Header>
        </>
      );
    };
    
    export default HeaderDash;