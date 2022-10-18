import { Container } from "./style.js";
import { LogoAndBtn } from "./style.js";
import { BackgroundForm } from "./style.js";
import { DivInfo } from "./style.js";
import { Form } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

const RegisterPanel = () => {
  const schema = yup.object({
    name: yup.string().required("Nome Obrigatório"),
    email: yup
      .string()
      .required("E-mail Obrigatório")
      .email("Digite um E-mail válido"),
    password: yup
      .string()
      .required("Senha Obrigatório")
      .min(8, "O minimo são 8 caracteres")
      .matches(/[a-z]+/, "A senha precisa de no minimo 1 letra Minúscula")
      .matches(/[A-Z]+/, "A senha precisa de no minimo 1 letra Maiúscula")
      .matches(/[@$!%*#?&]+/, "A senha precisa de um caractere especial")
      .matches(/\d+/, "A senha precisa de no minimo 1 número"),
    passwordConfirmation: yup
      .string()
      .required("Confirmação de senha é obrigatório")
      .oneOf([yup.ref("password")], "Senhas não se correspondem"),
    bio: yup.string().required("Bio Obrigatório"),
    contact: yup.string().required("Contato Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { Register } = useContext(AuthContext);

  return (
    <>
      <ToastContainer theme="dark" progressClassName="progress" />
      <Container>
        <LogoAndBtn>
          <h1>Kenzie Hub</h1>
          <Link to="/login">
            <button>Voltar</button>
          </Link>
        </LogoAndBtn>

        <BackgroundForm>
          <DivInfo>
            <h2>Crie sua Conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
          </DivInfo>

          <Form onSubmit={handleSubmit(Register)}>
            <label htmlFor="">Nome</label>

            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {toast.error(errors.name?.message, {
              toastId: "",
            })}

            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />

            {toast.error(errors.email?.message, {
              toastId: "",
            })}

            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />

            {toast.error(errors.password?.message, {
              toastId: "",
            })}

            <label htmlFor="">Confirmar Senha</label>
            <input
              type="password"
              placeholder="Confirme a senha"
              {...register("passwordConfirmation")}
            />
            {toast.error(errors.passwordConfirmation?.message, {
              toastId: "",
            })}

            <label htmlFor="">Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />

            {toast.error(errors.bio?.message, {
              toastId: "",
            })}

            <label htmlFor="">Contato</label>
            <input
              type="tel"
              placeholder="Opção de contato"
              {...register("contact")}
            />

            {toast.error(errors.contact?.message, {
              toastId: "",
            })}

            <label htmlFor="module">Selecionar módulo</label>
            <select id="module" {...register("course_module")}>
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado) </option>
              <option>Terceiro módulo (Introdução ao Backend) </option>
              <option>Quarto módulo (Backend Avançado)</option>
            </select>

            <button type="submit">Cadastrar</button>
          </Form>
        </BackgroundForm>
      </Container>
    </>
  );
};

export default RegisterPanel;
