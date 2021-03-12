import HabitsCard from "./HabitsCard";
import { Container } from "./ListStyle";

const HabitsList = ({ token, items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <HabitsCard key={index} item={item} token={token} />
      ))}
    </Container>
  );
};

export default HabitsList;
