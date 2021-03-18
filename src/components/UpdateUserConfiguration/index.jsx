import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormWrapper,
  ButtonForm,
  PageContainer,
  CardContent,
  ButtonContainer,
} from "./styles";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import Snackbars from "../Snackbar";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";

const schema = yup.object().shape({
  username: yup.string().required("campo obrigatório."),
});

const FormRegistro = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  const history = useHistory();
  const [user, setUser] = useState("");
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    api.patch(`/users/${decoded.user_id}/`, data).then((response) => {
      reset();
      console.log(response);
      setOpen(true);
    });
  };

  setTimeout(
    function () {
      setOpen(false);
    },

    5000
  );

  useEffect(() => {
    api
      .get(`/users/${decoded.user_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data));
  }, [user]);

  return (
    <PageContainer>
      <CardContent>
        <h3>Dados atuais</h3>
        <p>
          Nome de usuário: <p>{user.username && user.username}</p>
        </p>
        <p>
          Email: <p>{user.email && user.email}</p>
        </p>
      </CardContent>

      <FormWrapper>
        <form onSubmit={handleSubmit(handleData)}>
          <p>Atualizar dados</p>
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
          <ButtonContainer>
            <ButtonForm type="submit" bgColor="#bebebe" btnWidth="100px">
              alterar
            </ButtonForm>

            <ButtonForm onClick={() => history.push("/dashboard")}>
              Voltar
            </ButtonForm>
          </ButtonContainer>
        </form>
      </FormWrapper>

      <Snackbars open={open} severity="success">
        Alteração realizada com sucesso.
      </Snackbars>
    </PageContainer>
  );
};

export default FormRegistro;
