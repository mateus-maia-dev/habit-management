import { combineReducers } from "redux";

import signInReducer from "./userLogin/reducer";
import changeHabitReduce from "./changeHabit/reducer";

export default combineReducers({
  signInReducer,
  changeHabitReduce,
});
