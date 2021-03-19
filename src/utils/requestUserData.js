import api from "../services/api";

export const requestUserData = (dispatch, habitAction) => {
  const token = localStorage.getItem("token");
  api
    .get("/habits/personal/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(habitAction(response.data)))
    .catch((e) => console.log(e));
};
