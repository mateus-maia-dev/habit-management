import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import { goalsPostThunk } from "../../../../store/modules/groupReduce/thunk";

const schema = yup.object().shape({
  title: yup.string().required("campo obrigatório."),
});

const GoalsFormPost = ({ groupId }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    dispatch(goalsPostThunk(data, groupId));
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

        <select ref={register} name="difficulty">
          <option value="">Dificuldade</option>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
          <option value="Muito difícil">Muito difícil</option>
        </select>

        <select ref={register} name="how_much_achieved">
          <option value="">Progresso</option>
          <option value="0">0%</option>
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>

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
export default GoalsFormPost;
