import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import api from "../../../services/api";

const schema = yup.object().shape({
  title: yup.string().required("campo obrigatório."),
});

const FormCreateHabit = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const tokenTempParaTest =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1NzI4MTA0LCJqdGkiOiIyYmIxNzRjOWYwOGI0NWFkOTVlZTIyMmFkYzUwZDNhZSIsInVzZXJfaWQiOjR9.hwj93WWyyXQqMkHIB_pAEFUO41V068hyYPYazO9tcgk";

  const handleData = (data) => {
    console.log(data);
    api
      .post("/habits/", data, {
        headers: { Authorization: `Bearer ${tokenTempParaTest}` },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleData)}>
        <TextField
          variant="outlined"
          label="título"
          name="title"
          type="text"
          size="small"
          inputRef={register}
          helperText={errors.title?.message}
          error={!!errors.title}
        />

        <select ref={register} name="category" hidden>
          <option value="musica" />
        </select>

        <select ref={register} name="difficulty">
          <option value="">Dificuldade</option>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
          <option value="Muito difícil">Muito difícil</option>
        </select>

        <select ref={register} name="frequency">
          <option value="">Frequência</option>
          <option value="Diária">Diária</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensal">Mensal</option>
        </select>

        <select ref={register} name="achieved">
          <option value="">Progresso</option>
          <option value="0">0%</option>
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>

        <select ref={register} name="user" hidden>
          <option value="2" />
        </select>

        <Button variant="contained" color="default" size="small" type="submit">
          adicionar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormCreateHabit;
