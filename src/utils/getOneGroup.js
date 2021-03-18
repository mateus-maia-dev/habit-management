import api from "../services/api";

export const getOneGroup = (id, setUserData, showOneGroup, setShowOneGroup) => {
  const token = localStorage.getItem("token");
  api
    .get(`/groups/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => setUserData(response.data))
    .then(() => setShowOneGroup(!showOneGroup))
    .catch((e) => console.log(e));
};

export const getOneGroup2 = (id, dispatch, action) => {
  const token = localStorage.getItem("token");
  api
    .get(`/groups/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(action(response)))
    .catch((e) => console.log(e));
};
