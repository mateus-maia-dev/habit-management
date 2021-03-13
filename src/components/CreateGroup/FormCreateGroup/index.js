import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import api from "../../../services/api";

const schema = yup.object().shape({
  name: yup.string().required("campo obrigatório."),
  description: yup.string().required("campo obrigatório."),
});

const FormCreateGroup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const tokenTempParaTest =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1NzI4MTA0LCJqdGkiOiIyYmIxNzRjOWYwOGI0NWFkOTVlZTIyMmFkYzUwZDNhZSIsInVzZXJfaWQiOjR9.hwj93WWyyXQqMkHIB_pAEFUO41V068hyYPYazO9tcgk";

  const handleData = (data) => {
    console.log(data);
    api
      .post("/groups/", data, {
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
          label="nome do grupo"
          name="name"
          type="text"
          size="small"
          inputRef={register}
          helperText={errors.name?.message}
          error={!!errors.name}
        />

        <TextField
          variant="outlined"
          label="descrição"
          name="description"
          type="text"
          size="small"
          inputRef={register}
          helperText={errors.description?.message}
          error={!!errors.description}
        />

        <select ref={register} name="category" hidden>
          <option value="musica" />
        </select>

        <Button variant="contained" color="default" size="small" type="submit">
          adicionar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormCreateGroup;
