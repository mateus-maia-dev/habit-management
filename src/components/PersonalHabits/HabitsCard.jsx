import api from "../../services/api";
import { CardContainer, ContentCard } from "./CardStyle";

const HabitsList = ({ token, item }) => {
  const deleteHabit = (id) => {
    api.delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.title}</h2>
        <h3>Dificuldade: {item.difficulty}</h3>
        <h3>{item.frequency}</h3>
      </ContentCard>
      <button onClick={() => deleteHabit(item.id)}>Excluir Habito</button>
    </CardContainer>
  );
};

export default HabitsList;
