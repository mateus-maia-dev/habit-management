import api from "../../../services/api";

import {
  changeHabitAction,
  deleteHabitAction,
  requestHabitAction,
} from "./action";

// export const requestHabitThunk = (change, setChange) => (dispatch) => {
//   const token = localStorage.getItem("token");
//   let user = [];
//   api
//     .get("/habits/personal/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => user.push(response.data))
//     .then(() => dispatch(requestHabitAction(user)))
//     .then(() => setChange(!change))
//     .catch((e) => console.log(e));
// };

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
