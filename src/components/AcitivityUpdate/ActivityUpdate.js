import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";
import { useState } from "react";
import api from "../../services/api";

const schema = yup.object().shape({
  title: yup.string().required("campo obrigatório."),
});

const ActivityUpdate = ({id, title}) => {
  const [ newTitle, setNewTitle ] = useState(title)

  const handleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const token = useSelector((state) => state.signInReducer.token);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    api
      .patch(`/activities/${id}/`, data, {
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
          label="título"
          name="title"
          type="text"
          size="small"
          onChange={handleChange}
          value={newTitle}
          inputRef={register}
          helperText={errors.title?.message}
          error={!!errors.title}
        />
        
        <Button variant="contained" color="default" size="small" type="submit">
          salvar
        </Button>
      </form>
    </FormWrapper>
  );
};
export default ActivityUpdate;
