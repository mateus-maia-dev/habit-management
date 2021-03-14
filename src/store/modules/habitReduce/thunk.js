import api from "../../../services/api";
import { requestUserData } from "../../../utils/requestUserData";

import {
  requestHabitAction,
  createHabitAction,
  deleteHabitAction,
  updateHabitAction,
} from "./action";

const token = localStorage.getItem("token");

// const requestUserData = (dispatch, token, habitAction) => {
//   api
//     .get("/habits/personal/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => dispatch(habitAction(response.data)))
//     .catch((e) => console.log(e));
// };

export const requestHabitThunk = () => (dispatch) => {
  requestUserData(dispatch, requestHabitAction);
};

export const createHabitThunk = (data) => (dispatch) => {
  api
    .post("/habits/", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });

  requestUserData(dispatch, createHabitAction);
};

export const updateHabitThunk = (data, id) => (dispatch) => {
  api
    .patch(`/habits/${id}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });
  requestUserData(dispatch, updateHabitAction);
};

export const deleteHabitThunk = (id) => (dispatch) => {
  api
    .delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => console.log(e));
  requestUserData(dispatch, deleteHabitAction);
};
