import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";
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
    console.log(data);

    api.post("/users/", data).then((response) => {
      reset();
      history.push("/login");
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleData)}>
        <p>REGISTRAR</p>
        <TextField
          className="inputBox"
          variant="outlined"
          label="nome de usuário"
          name="username"
          type="text"
          size="small"
          inputRef={register}
          helperText={errors.username?.message}
          error={!!errors.username}
        />
        <TextField
          className="inputBox"
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          size="small"
          inputRef={register}
          helperText={errors.email?.message}
          error={!!errors.email}
        />
        <TextField
          className="inputBox"
          variant="outlined"
          label="senha"
          name="password"
          type="password"
          size="small"
          inputRef={register}
          helperText={errors.password?.message}
          error={!!errors.password}
        />

        <div>
          <Button
            variant="contained"
            color="default"
            size="small"
            type="submit"
          >
            enviar
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default FormRegistro;
