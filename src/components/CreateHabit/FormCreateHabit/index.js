import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useSelector, useDispatch } from "react-redux";
import { changeHabitThunk } from "../../../store/modules/habitReduce/thunk";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./styles";

import api from "../../../services/api";
import jwt_decode from "jwt-decode";

const schema = yup.object().shape({
  title: yup.string().required("campo obrigatório."),
});

const FormCreateHabit = () => {
  const changeHabit = useSelector((state) => state.changeHabitReduce);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.signInReducer.token);
  const decoded = jwt_decode(token);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    api
      .post("/habits/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(changeHabitThunk(changeHabit));
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

        <select ref={register} name="achieved" hidden>
          <option value="false">Terminou</option>
        </select>

        <select ref={register} name="how_much_achieved">
          <option value="">Progresso</option>
          <option value="0">0%</option>
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>

        <select ref={register} name="user" hidden>
          <option value={decoded.user_id} />
        </select>

        <Button variant="contained" color="default" size="small" type="submit">
          adicionar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormCreateHabit;
