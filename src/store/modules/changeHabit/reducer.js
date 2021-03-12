import { changeHabitType, deleteHabitType } from "./actionType";

const changeHabitReduce = (state = false, action) => {
  switch (action.type) {
    case changeHabitType:
      return (state = action.change);

    case deleteHabitType:
      return (state = action.deleteHabit);

    default:
      return state;
  }
};

export default changeHabitReduce;
