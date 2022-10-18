import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Main } from "./style";
import { AllCards } from "./style";
import { Info } from "./style";
import { Card } from "./style";
import { Apoio } from "./style";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { TechContext } from "../../../Context/TechContext";


const ListTech = ({setModal}) => {
  const { user } = useContext(AuthContext);
  const { openModal } = useContext(TechContext);


  

  return (
    <Main>
      <Info>
        <h3>Tecnologias</h3>
        <button onClick= {() => setModal(true)}>
          <AiOutlinePlus />
        </button>
      </Info>
      <Apoio>
        <AllCards>
          <Card>
            {
              user?.techs.length === 0 ?
              <h1>Cadastre uma Tecnologia</h1>
              : 
              user?.techs.map((element, index) => (
                <div key={index} className="individual_card">
                  <h4>{element.title}</h4>
                  <div className="status_trash">
                    <p>{element.status}</p>
                    <button>
                      <BsTrash />
                    </button>
                  </div>
                </div>
              ))
            }
          </Card>
        </AllCards>
      </Apoio>
    </Main>
  );
};

export default ListTech;
