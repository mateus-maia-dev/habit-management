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
    //.then(() => history.push("/onegroup"))
    .catch((e) => console.log(e));
};
