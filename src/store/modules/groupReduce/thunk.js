import { groupRequestAction } from "./actions";
import { requestGroupData } from "../../../utils/requestGroupData";
import { requestUserGroupData } from "../../../utils/requestUserGroupData";

export const groupRequestThunk = () => (dispacth) => {
  requestGroupData(dispacth, groupRequestAction);
};

// export const userGroupRequestThunk = ({ userData }) => (dispacth) => {
//   requestUserGroupData(dispacth, groupRequestAction, userData);
// };
