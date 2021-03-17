import GroupCard from "./GroupCard";
import { Container } from "./ListStyle";

const GroupList = ({ items, handleId }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <GroupCard key={index} item={item} handleId={handleId} />
      ))}
    </Container>
  );
};

export default GroupList;
