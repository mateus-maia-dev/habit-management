import UserGroup from "./action";
import api from "../../../services/api";
import { requestUserGroups } from "../../../utils/requestUserGroups";

export const UserGroupThunk = () => (dispatch) => {
  requestUserGroups(dispatch, UserGroup);
};

// export const UserGroupThunk = (groupID) => (dispatch) => {
//   console.log(groupID);
//   group();
//   async function group() {
//     await api
//       .get(`/groups/${groupID}/`)
//       .then((response) => dispatch(UserGroup(response.data)));
//   }
// };
