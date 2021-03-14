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

/*


const changeHabitReduce = (state = [], action) => {
  switch (action.type) {
    case "@request/HABIT":
      const { requestHabit } = action;
      console.log(requestHabit);
      return (state = requestHabit);
    //(state = [...state, requestHabit]);
    case changeHabitType:
      return state();

    case deleteHabitType:
      return (state = action.deleteHabit);

    default:
      return state;
  }
};

export default changeHabitReduce;
*/
