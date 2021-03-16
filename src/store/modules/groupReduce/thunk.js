import { groupRequestAction } from "./actions";
import { requestGroupData } from "../../../utils/requestGroupData";

export const groupRequestThunk = () => (dispacth) => {
  requestGroupData(dispacth, groupRequestAction);
};
