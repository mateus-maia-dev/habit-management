import api from "../../../services/api";
import { requestHabitThunk } from "../habitReduce/thunk";
import { singInAction } from "./action";

export const signInThunk = (userData, history) => (dispatch) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.clear();
      localStorage.setItem("token", response.data.access);
      dispatch(singInAction(response.data.access));
      dispatch(requestHabitThunk());
      history.push("/dashboard");
    })
    .catch((err) => console.log(err));
};
