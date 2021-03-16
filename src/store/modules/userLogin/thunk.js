import api from "../../../services/api";
import { requestHabitThunk } from "../habitReduce/thunk";
import { singInAction } from "./action";

export const signInThunk = (userData, history, setOpen) => (dispatch) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.clear();
      localStorage.setItem("token", response.data.access);
      dispatch(singInAction(response.data.access));
    })
    .then(() => dispatch(requestHabitThunk()))

    .then(() => history.push("/dashboard"))
    .catch((err) => {
      if (err.response.status !== 200) {
        setOpen(true);
      }
    });
};
