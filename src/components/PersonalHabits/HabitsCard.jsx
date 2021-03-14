import UpdateHabit from "../UpdateHabit/index";

import { useSelector, useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";

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
      <UpdateHabit id={item.id} />
      <button
        onClick={() =>
          dispatch(deleteHabitThunk(changeHabit, item.id, history))
        }
      >
        Excluir Hábito
      </button>
    </CardContainer>
  );
};

export default HabitsList;
