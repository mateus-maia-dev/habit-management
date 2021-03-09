const HabitsList = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.category}</h2>
      <p>{item.difficulty}</p>
      <p>{item.frequency}</p>
    </div>
  );
};

export default HabitsList;
