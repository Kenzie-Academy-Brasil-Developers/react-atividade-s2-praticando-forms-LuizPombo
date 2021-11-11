import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [card, setCard] = useState([]);

  const formSchema = yup.object().shape({
    userName: yup.string().required("Nome de usuário necessário"),
    name: yup.string().required("Nome completo necessário"),
    email: yup.string().required("E-mail necessário").email("E-mail inváldo"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "E-mails não batem")
      .required("Porfavor confirme o E-mail"),
    password: yup.string().required("Senha necessária"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não batem")
      .required("Porfavor confirme a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => setCard(data);

  return (
    <div className="App">
      <form className="forms" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome de usuário" {...register("userName")} />
        {errors.userName?.message}
        <input placeholder="Nome completo" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Endereço de E-mail" {...register("email")} />
        {errors.email?.message}
        <input
          placeholder="Confirme seu E-mail"
          {...register("confirmEmail")}
        />
        {errors.confirmEmail?.message}
        <input placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <input
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message}
        <label>
          <input type="radio" id="terms" />
          Aceito os termos de uso
        </label>
        <button type="submit">CADASTRAR</button>
      </form>

      <Card card={card} />
    </div>
  );
}

export default App;
