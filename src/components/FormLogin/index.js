import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/userLogin/thunk";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";
import { useState } from "react";
import Snackbars from "../Snackbar";

const schema = yup.object().shape({
  username: yup.string().required("campo obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve conter no mínimo de 6 dígitos.")
    .required("campo obrigatório."),
});

const FormLogin = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    dispatch(signInThunk(data, history, setOpen));
  };

  const handleClickRegister = () => {
    history.push("/register");
  };

  console.log(open);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleData)}>
        <p>LOGIN</p>
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
          label="senha"
          name="password"
          type="password"
          size="small"
          inputRef={register}
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        <br></br>
        <Button variant="contained" color="default" size="small" type="submit">
          enviar
        </Button>
        <br></br>
        <Button onClick={() => handleClickRegister()} color="default">
          não possui uma conta?
        </Button>
      </form>
      <Snackbars open={open} severity="error">
        Usuário ou Senha Incorreta
      </Snackbars>
    </FormWrapper>
  );
};

export default FormLogin;
