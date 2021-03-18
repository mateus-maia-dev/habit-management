import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper, ButtonForm } from "./styles";
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
        <div>
          <ButtonForm type="submit" bgColor="#bebebe" btnWidth="100px">
            alterar
          </ButtonForm>
        </div>
      </form>
    </FormWrapper>
  );
};

export default FormRegistro;
