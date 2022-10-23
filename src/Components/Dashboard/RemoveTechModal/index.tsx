import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { TechContext } from "../../../Context/TechContext";
import { Section } from "./style";
import { Card } from "./style";

const RemoveTechModal = () => {

    const {setRemoveModal, DeleteTech } = useContext(TechContext)
    const {techs} = useContext(AuthContext)
  console.log(techs)
  return (
    <>
      <Section>

        <Card>
            <h1>Deseja Remover a Tecnologia</h1>
            <div>
                <button onClick={() => {
                  
                  techs.map((element) => 
                
                    DeleteTech(element.id)
                  )
                }}>Excluir</button>
                <button  onClick={() => setRemoveModal(false)}>Cancelar</button>
            </div>

        </Card>

      </Section>



      
    </>
  );
};

export default RemoveTechModal;
