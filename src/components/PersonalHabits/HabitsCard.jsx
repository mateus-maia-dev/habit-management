import { useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";
import { CardContainer, ContentCard } from "./CardStyle";

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
      <button onClick={() => deleteHabitThunk(item.id)}>Excluir Habito</button>
    </CardContainer>
  );
};

export default HabitsCard;
