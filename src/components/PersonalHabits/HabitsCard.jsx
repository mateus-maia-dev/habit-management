import UpdateHabit from "../UpdateHabit/index";

import { useSelector, useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/changeHabit/thunk";

import { useHistory } from "react-router-dom";

import { CardContainer, ContentCard } from "./CardStyle";

const HabitsList = ({ item }) => {
  const changeHabit = useSelector((state) => state.changeHabitReduce);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.title}</h2>
        <h3>Dificuldade: {item.difficulty}</h3>
        <h3>{item.frequency}</h3>
      </ContentCard>
      <UpdateHabit />
      <UpdateHabit
        onClick={() =>
          dispatch(deleteHabitThunk(changeHabit, item.id, history))
        }
      >
        Excluir Hábito
      </UpdateHabit>
    </CardContainer>
  );
};

export default HabitsList;
