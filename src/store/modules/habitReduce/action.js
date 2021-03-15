import {
  requestHabitType,
  createHabitType,
  updateHabitType,
  deleteHabitType,
} from "./actionType";

export const requestHabitAction = (requestHabit) => ({
  type: requestHabitType,
  requestHabit,
});

export const createHabitAction = (createHabit) => ({
  type: createHabitType,
  createHabit,
});

export const updateHabitAction = (updateHabit) => ({
  type: updateHabitType,
  updateHabit,
});

export const deleteHabitAction = (deleteHabit) => ({
  type: deleteHabitType,
  deleteHabit,
});
