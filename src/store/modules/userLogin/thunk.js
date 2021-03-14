import api from "../../../services/api";
import { singInAction } from "./action";

export const signInThunk = (userData, history) => (dispatch) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.clear();
      localStorage.setItem("token", response.data.access);

      dispatch(singInAction(response.data.access));
      history.push("/dashboard");
    })
    .catch((err) => console.log(err));
};
