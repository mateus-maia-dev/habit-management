import api from "../../services/api";
import { CardContainer, ContentCard } from "./CardStyle";

<<<<<<< HEAD
const HabitsList = ({ token, item }) => {
  const deleteHabit = (id) => {
    api.delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
=======
const HabitsCard = ({ item }) => {
  const dispatch = useDispatch();
>>>>>>> feature/cards/dinamicos

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.title}</h2>
        <h2>{item.category}</h2>
        <p>{item.difficulty}</p>
        <p>{item.frequency}</p>
      </ContentCard>
      <button onClick={() => deleteHabit(item.id)}>Excluir Habito</button>
    </CardContainer>
  );
};

export default HabitsCard;
