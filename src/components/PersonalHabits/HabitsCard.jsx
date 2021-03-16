import { useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";
import { CardContainer, ContentCard } from "./CardStyle";
import UpdateHabit from "../UpdateHabit/index";

const HabitsCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.title}</h2>
        <h3>Categoria: {item.category}</h3>
        <h3>Dificuldade: {item.difficulty}</h3>
        <h3>Frequencia: {item.frequency}</h3>
      </ContentCard>
      <UpdateHabit id={item.id} />
      <button onClick={() => dispatch(deleteHabitThunk(item.id))}>
        Excluir Habito
      </button>
    </CardContainer>
  );
};

export default HabitsCard;
