import { changeHabitType, deleteHabitType } from "./actionType";

export const changeHabitAction = (change) => ({
  type: changeHabitType,
  change,
});

export const deleteHabitAction = (deleteHabit) => ({
  type: deleteHabitType,
  deleteHabit,
});
