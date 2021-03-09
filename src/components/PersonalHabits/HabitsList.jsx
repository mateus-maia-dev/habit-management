import HabitsCard from "./HabitsCard";

const HabitsList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <HabitsCard key={index} item={item} />
      ))}
    </div>
  );
};

export default HabitsList;
