import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import { activitiesPatchThunk } from "../../../../store/modules/groupReduce/thunk";

const schema = yup.object().shape({
  title: yup.string().required("campo obrigatório."),
});

const ActivitiesFormPatch = ({ itemId, groupId }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    dispatch(activitiesPatchThunk(data, itemId, groupId));
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
        <Button variant="contained" color="default" size="small" type="submit">
          adicionar
        </Button>
      </form>
    </FormWrapper>
  );
};
export default ActivitiesFormPatch;
