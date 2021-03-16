import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import jwt_decode from "jwt-decode";

const schema = yup.object().shape({
  username: yup.string().required("campo obrigatório."),
});

const FormRegistro = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  const history = useHistory();

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    api.patch(`/users/${decoded.user_id}/`, data).then((response) => {
      reset();
      console.log(response);
      history.push("/dashboard");
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleData)}>
        <p>Alterar Nome</p>
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
