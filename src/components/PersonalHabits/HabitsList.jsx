import HabitsCard from "./HabitsCard";
import { Container } from "./ListStyle";

const HabitsList = ({ token, items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <HabitsCard key={index} token={token} item={item} />
      ))}
    </Container>
  );
};

export default HabitsList;
