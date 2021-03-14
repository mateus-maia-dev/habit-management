import UpdateHabit from "../UpdateHabit/index";

import { useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";

import { CardContainer, ContentCard } from "./CardStyle";

const HabitsList = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.title}</h2>
        <h3>Dificuldade: {item.difficulty}</h3>
        <h3>{item.frequency}</h3>
      </ContentCard>
      <UpdateHabit id={item.id} />
      <button onClick={() => dispatch(deleteHabitThunk(item.id))}>
        Excluir Hábito
      </button>
    </CardContainer>
  );
};

export default HabitsList;
