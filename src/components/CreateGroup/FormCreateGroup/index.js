import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import { useDispatch } from "react-redux";
import { groupCreateThunk } from "../../../store/modules/groupReduce/thunk";

const schema = yup.object().shape({
  name: yup.string().required("campo obrigatório."),
  description: yup.string().required("campo obrigatório."),
});

const FormCreateGroup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    dispatch(groupCreateThunk(data));
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
