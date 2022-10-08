import { Container } from "./style";
import { Bio } from "./style";
import { Background } from "./style";
import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../Services/api";

const Login = ({ setName, setModule }) => {
  const schema = yup.object({
    email: yup.string().required("E-mail Obrigatório"),
    password: yup.string().required("Senha Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const  onSubmit = async (data) => {
   await api
      .post("/sessions", data)
      .then((res) => {
        toast.success("Usúario Logado com Sucesso");
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.user.id);
        setName(res.data.user.name);
        setModule(res.data.user.course_module);
        console.log();
        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
        return res.data;
      })
      .catch((err) => {
        toast.error("Verifique os Dados");
        return err;
      });
  };



  return (
    <>
      <ToastContainer theme="dark" progressClassName="progress" />
      <Container>
        <Bio>
          <h1>KenzieHub</h1>
        </Bio>

        <Background>
          <h1>Login</h1>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Digite aqui seu Email"
              {...register("email")}
            />
            {toast.error(errors.email?.message, {
              toastId: "",
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

export default Login;
