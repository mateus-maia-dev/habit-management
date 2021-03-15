import {
  requestHabitType,
  createHabitType,
  updateHabitType,
  deleteHabitType,
} from "./actionType";

const defaulState = {
  userData: [],
  change: false,
};

const changeHabitReduce = (state = defaulState, action) => {
  const change = false;

  switch (action.type) {
    case requestHabitType:
      const { requestHabit } = action;
      return (state = {
        userData: [...requestHabit],
        change: change,
      });

    case createHabitType:
      const { createHabit } = action;
      return (state = {
        userData: [...createHabit],
        change: !change,
      });

    case updateHabitType:
      const { updateHabit } = action;
      return (state = {
        userData: [...updateHabit],
        change: !change,
      });

    case deleteHabitType:
      const { deleteHabit } = action;
      return (state = {
        userData: [...deleteHabit],
        change: !change,
      });

    default:
      return state;
  }
};

export default changeHabitReduce;
