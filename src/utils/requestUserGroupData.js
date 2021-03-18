import axios from "axios";

export const requestUserGroupData = (dispatch, groupAction, userData) => {
  const token = localStorage.getItem("token");

  axios
    .get(`/groups/${userData.group}/`, {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
    .then((response) => dispatch(groupAction(response.data)));
};
