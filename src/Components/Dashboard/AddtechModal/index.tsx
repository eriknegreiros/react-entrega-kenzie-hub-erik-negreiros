import { Section } from "./style";
import { Card } from "./style";
import { Header } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { TechContext } from "../../../Context/TechContext";
import { iRegisterTech } from "../../../Context/TechContext";

const AddTechModal = () => {
  const schema = yup.object({
    title: yup.string().required("Nome da Tecnologia é Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <iRegisterTech>({
    resolver: yupResolver(schema),
  });

  const { RegisterTech, setModal } = useContext(TechContext);

  return (
    <>
      <Section>
        <ToastContainer theme="dark" progressClassName="progress" />
        <Card>
          <Header>
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={() => setModal(false)}>
              <AiOutlineClose />
            </button>
          </Header>
          <Form onSubmit={handleSubmit(RegisterTech)}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Tecnologia"
              {...register("title")}
            />

            {toast.error(errors.title?.message, {
              toastId: "",
            })}

            <label>Selecionar Status</label>
            <select {...register("status")}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado </option>
            </select>

            <button  type="submit">Cadastrar Tecnologia</button>
          </Form>
        </Card>
      </Section>
    </>
  );
};

export default AddTechModal;
