import { getOneGroupAction } from "./actions";
import { getOneGroup } from "../../../utils/getOneGroup";

export const getOneGroupThunk = (id, history) => (dispatch) => {
  getOneGroup(id, dispatch, getOneGroupAction, history);
};
