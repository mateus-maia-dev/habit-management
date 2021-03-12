import api from "../../../services/api";

import { changeHabitAction, deleteHabitAction } from "./action";

export const changeHabitThunk = (change) => (dispatch) => {
  dispatch(changeHabitAction(!change));
};

export const deleteHabitThunk = (change, id, history) => (dispatch) => {
  const token = localStorage.getItem("token");
  api
    .delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(dispatch(deleteHabitAction(!change)))
    .then(history.push("/dashboard"))
    .catch((e) => console.log(e));
};
