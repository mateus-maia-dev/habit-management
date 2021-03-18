import {
  groupRequestAction,
  activitiesPostAction,
  activitiesDeleteAction,
  activitiesPatchAction,
  goalsPostAction,
  goalsDeleteAction,
  goalsPatchAction,
} from "./actions";
import api from "../../../services/api";

import { requestGroupData } from "../../../utils/requestGroupData";
import { requestUserGroupData } from "../../../utils/requestUserGroupData";

import { getOneGroup2 } from "../../../utils/getOneGroup";

const token = localStorage.getItem("token");

export const groupRequestThunk = () => (dispacth) => {
  requestGroupData(dispacth, groupRequestAction);
};

export const activitiesPostThunk = (data, groupId) => (dispatch) => {
  api
    .post(`/activities/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });

  getOneGroup2(groupId, dispatch, activitiesPostAction);
};

export const activitiesDeleteThunk = (id, groupId) => (dispatch) => {
  api
    .delete(`/activities/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });
  getOneGroup2(groupId, dispatch, activitiesDeleteAction);
};

export const activitiesPatchThunk = (data, itemId, groupId) => (dispacth) => {
  api
    .patch(`/activities/${itemId}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });
  getOneGroup2(groupId, dispacth, activitiesPatchAction);
};

export const goalsPostThunk = (data, groupId) => (dispacth) => {
  api
    .post(`/goals/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });
  getOneGroup2(groupId, dispacth, goalsPostAction);
};

export const goalsDeleteThunk = (id, idGroup) => (dispacth) => {
  api
    .delete(`/goals/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });
  getOneGroup2(idGroup, dispacth, goalsDeleteAction);
};

export const goalsPatchThunk = (data, itemId, groupId) => (dispacth) => {
  api
    .patch(`/goals/${itemId}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      console.log(error);
    });
  getOneGroup2(groupId, dispacth, goalsPatchAction);
};
