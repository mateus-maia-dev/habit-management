import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/userLogin/thunk";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

const schema = yup.object().shape({
  username: yup.string().required("campo obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve conter no mínimo de 6 dígitos.")
    .required("campo obrigatório."),
});

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    dispatch(signInThunk(data, history));
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleData)}>
        <p>LOGIN</p>
        <TextField
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
          variant="outlined"
          label="senha"
          name="password"
          type="password"
          size="small"
          inputRef={register}
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        <Button variant="contained" color="default" size="small" type="submit">
          enviar
        </Button>
        <Button color="default">não possui uma conta?</Button>
      </form>
    </FormWrapper>
  );
};

export default FormLogin;
