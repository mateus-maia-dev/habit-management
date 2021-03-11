import HabitsCard from "./HabitsCard";
import { Container } from "./ListStyle";

const HabitsList = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <HabitsCard key={index} item={item} />
      ))}
    </Container>
  );
};

export default HabitsList;
