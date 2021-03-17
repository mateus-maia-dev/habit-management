import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import api from "../../services/api";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("campo obrigatório."),
  description: yup.string().required("campo obrigatório."),
});

const GroupUpdate = ({id, name, description}) => {
    const [ newName, setNewName ] = useState(name)
    const [ newDescription, setNewDescription ] = useState(description)
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setNewDescription(event.target.value)
    }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const token = localStorage.getItem("token")

  const handleData = (data) => {
      console.log(data)
    api
      .patch(`/groups/${id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
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
          onChange={handleNameChange}
          value={newName}
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
          onChange={handleDescriptionChange}
          value={newDescription}
          inputRef={register}
          helperText={errors.description?.message}
          error={!!errors.description}
        />

        <Button variant="contained" color="default" size="small" type="submit">
          salvar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default GroupUpdate;
