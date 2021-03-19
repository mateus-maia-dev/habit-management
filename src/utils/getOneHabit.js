import api from "../services/api";

export const getOneHabit = (id, setUserData, showOneGroup, setShowOneGroup) => {
  const token = localStorage.getItem("token");
  api
    .get(`/habits/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => setUserData(response.data))
    .then(() => setShowOneGroup(!showOneGroup))
    .catch((e) => console.log(e));
};
