import { combineReducers } from "redux";

import signInReducer from "./userLogin/reducer";
import changeHabitReduce from "./habitReduce/reducer";
import groupIDReducer from "./groupReduce/reducer";
import getOneGroupReducer from "./getOneGroup/reducer";

export default combineReducers({
  signInReducer,
  changeHabitReduce,
  groupIDReducer,
  getOneGroupReducer,
});
