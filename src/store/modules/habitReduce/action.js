import { changeHabitType, deleteHabitType } from "./actionType";

export const requestHabitAction = (requestHabit) => ({
  type: "@request/HABIT",
  requestHabit,
});

export const changeHabitAction = (change) => ({
  type: changeHabitType,
  change,
});

export const deleteHabitAction = (deleteHabit) => ({
  type: deleteHabitType,
  deleteHabit,
});
