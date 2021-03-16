import GroupCard from "./GroupCard";
import { Container } from "./ListStyle";

const GroupList = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <GroupCard key={index} item={item} />
      ))}
    </Container>
  );
};

export default GroupList;
