import { CardContainer, ContentCard } from "./CardStyle";
import UpdateHabit from "../UpdateHabit/index";

import { useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";

const HabitsCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.title}</h2>
        <h2>{item.category}</h2>
        <p>{item.difficulty}</p>
        <p>{item.frequency}</p>
      </ContentCard>
      <UpdateHabit id={item.id} />
      <button onClick={() => dispatch(deleteHabitThunk(item.id))}>
        Excluir Habito
      </button>
    </CardContainer>
  );
};

export default HabitsCard;
