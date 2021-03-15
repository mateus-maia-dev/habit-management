import api from "../../../services/api";
import { requestUserData } from "../../../utils/requestUserData";

import {
  requestHabitAction,
  createHabitAction,
  deleteHabitAction,
  updateHabitAction,
} from "./action";

export const requestHabitThunk = () => (dispatch) => {
  requestUserData(dispatch, requestHabitAction);
};

export const createHabitThunk = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
  api
    .delete(`habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => console.log(e));
  requestUserData(dispatch, deleteHabitAction);
};
