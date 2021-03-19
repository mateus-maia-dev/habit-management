import HabitsCard from "./HabitsCard";
import { Container } from "./ListStyle";

const HabitsList = ({ token, items, handleId }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <HabitsCard key={index} token={token} item={item} handleId={handleId} />
      ))}
    </Container>
  );
};

export default HabitsList;
