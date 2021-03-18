import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import { activitiesPostThunk } from "../../../../store/modules/groupReduce/thunk";

const schema = yup.object().shape({
  title: yup.string().required("campo obrigatório."),
  realization_time: yup.date().required(),
});

const ActivitiesFormPost = ({ groupId }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    dispatch(activitiesPostThunk(data, groupId));
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
        <TextField
          variant="outlined"
          //label="Data"
          name="realization_time"
          type="date"
          size="small"
          inputRef={register}
          helperText={errors.date?.message}
          error={!!errors.date}
        />
        <select ref={register} name="group" hidden>
          <option value={groupId} />
        </select>
        <Button variant="contained" color="default" size="small" type="submit">
          adicionar
        </Button>
      </form>
    </FormWrapper>
  );
};
export default ActivitiesFormPost;
