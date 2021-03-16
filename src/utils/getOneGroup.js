import api from "../services/api";

export const getOneGroup = (id, dispatch, habitAction, history) => {
  const token = localStorage.getItem("token");
  api
    .get(`/groups/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(habitAction(response.data)))
    .then(() => history.push("/onegroup"))
    .catch((e) => console.log(e));
};
