import api from "../../../services/api";
import { requestHabitThunk } from "../habitReduce/thunk";
import { singInAction } from "./action";
import { UserGroupThunk } from "../userGroup/thunks";

export const signInThunk = (userData, history) => (dispatch) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.clear();
      localStorage.setItem("token", response.data.access);
      dispatch(singInAction(response.data.access));
    })
    .then(() => dispatch(requestHabitThunk()))
    // .then(() => dispatch(UserGroupThunk()))
    .then(() => history.push("/dashboard"))
    .catch((err) => console.log(err));
};
