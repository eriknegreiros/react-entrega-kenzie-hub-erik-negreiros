import { Container } from "./style";
import { Bio } from "./style";
import { Background } from "./style";
import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { iLogin } from "../../Context/AuthContext";

const LoginPanel = () => {
    const schema = yup.object({
      email: yup.string().required("E-mail Obrigatório"),
      password: yup.string().required("Senha Obrigatório"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<iLogin>({
      resolver: yupResolver(schema),
    });
  
    const  {Login} = useContext(AuthContext)


  
  
    return (
      <>
        <ToastContainer theme="dark" progressClassName="progress" />
        <Container>
          <Bio>
            <h1>KenzieHub</h1>
          </Bio>
  
          <Background>
            <h1>Login</h1>
  
            <Form onSubmit={handleSubmit(Login)}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Digite aqui seu Email"
                {...register("email")}
              />
              
              {toast.error(errors.email?.message, {
                toastId: ""
              })}
  
              <label htmlFor="">Senha</label>
              <input
                type="password"
                placeholder="Digite aqui sua Senha"
                {...register("password")}
              />
              {toast.error(errors.password?.message, {
                toastId: "",
              })}
  
              <button type="submit">Entrar</button>
            </Form>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">
              <button>Cadastre-se</button>
            </Link>
          </Background>
        </Container>
      </>
    );
  };
  
  export default LoginPanel;