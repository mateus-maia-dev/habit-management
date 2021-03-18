import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper, ButtonForm } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/userLogin/thunk";
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
          placeholder="senha"
          name="password"
          type="password"
          size="small"
          ref={register}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br></br>
        <ButtonForm type="submit" bgColor="#bebebe" btnWidth="100px">
          enviar
        </ButtonForm>
        <br></br>
        <ButtonForm onClick={() => handleClickRegister()}>
          não possui uma conta?
        </ButtonForm>
      </form>
      <Snackbars open={open} severity="error">
        Usuário ou Senha Incorreta
      </Snackbars>
    </FormWrapper>
  );
};

export default FormLogin;
