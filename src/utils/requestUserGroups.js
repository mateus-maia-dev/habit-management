import api from "../services/api";

export const requestUserGroups = (dispatch, habitAction) => {
  api
    .get("/groups/")
    .then((response) => dispatch(habitAction(response.data)))
    .catch((e) => console.log(e));
};
