import { combineReducers } from "redux";

import signInReducer from "./userLogin/reducer";
import changeHabitReduce from "./habitReduce/reducer";

export default combineReducers({
  signInReducer,
  changeHabitReduce,
});
