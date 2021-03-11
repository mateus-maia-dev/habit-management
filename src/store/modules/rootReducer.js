import { combineReducers } from "redux";

import signInReducer from "./userLogin/reducer";

export default combineReducers({
  signInReducer,
});
