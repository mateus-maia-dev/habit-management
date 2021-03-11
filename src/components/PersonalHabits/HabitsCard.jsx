import api from "../../services/api";
import { CardContainer, ContentCard } from "./CardStyle";

const HabitsList = ({ item }) => {
  const tokenTempParaTest =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1NzI4MTA0LCJqdGkiOiIyYmIxNzRjOWYwOGI0NWFkOTVlZTIyMmFkYzUwZDNhZSIsInVzZXJfaWQiOjR9.hwj93WWyyXQqMkHIB_pAEFUO41V068hyYPYazO9tcgk";

  const deleteHabit = (id) => {
    api.delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${tokenTempParaTest}`,
      },
    });
  };

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

export default HabitsList;
