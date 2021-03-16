import axios from "axios";

export const requestGroupData = (dispatch, groupAction) => {
  const token = localStorage.getItem("token");
  axios
    .get(`https://kabit-api.herokuapp.com/groups/?category=musica`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(groupAction(response.data)))
    .catch((e) => console.log(e));
};
