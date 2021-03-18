//import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import { goalsPatchThunk } from "../../../../store/modules/groupReduce/thunk";

const schema = yup.object().shape({});

const GoalsFormPatch = ({ itemId, groupId }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    dispatch(goalsPatchThunk(data, itemId, groupId));
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleData)}>
        <select ref={register} name="achieved">
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>

        <select ref={register} name="how_much_achieved">
          <option value="">Progresso</option>
          <option value="0">0%</option>
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>

        <Button variant="contained" color="default" size="small" type="submit">
          adicionar
        </Button>
      </form>
    </FormWrapper>
  );
};
export default GoalsFormPatch;
