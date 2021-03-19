import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper, ButtonForm } from "./styles";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().required("campo obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve conter no mínimo de 6 dígitos.")
    .required("campo obrigatório."),
  email: yup.string().email("E-mail invalido").required("campo obrigatório."),
});

const FormRegistro = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    api.post("/users/", data).then((response) => {
      reset();
      history.push("/login");
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleData)}>
        <p>CRIAR USUÁRIO</p>
        <input
          className="inputBox"
          variant="outlined"
          placeholder="nome de usuário"
          name="username"
          type="text"
          size="small"
          ref={register}
        />
        {errors.username && <span>{errors.username.message}</span>}
        <input
          className="inputBox"
          variant="outlined"
          placeholder="email"
          name="email"
          type="email"
          size="small"
          ref={register}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          className="inputBox"
          variant="outlined"
          placeholder="senha"
          name="password"
          type="password"
          size="small"
          ref={register}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <div>
          <ButtonForm bgColor="#bebebe" btnWidth="100px" type="submit">
            registrar
          </ButtonForm>
        </div>
      </form>
    </FormWrapper>
  );
};

export default FormRegistro;
