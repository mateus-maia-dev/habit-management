import { getGroupUser } from "./actionType";

const defaulState = {
  userGroup: [],
};

const UserGroupReducer = (state = defaulState, action) => {
  switch (action.type) {
    case getGroupUser:
      const { userGroup } = action;
      return (state = {
        userGroup: [...userGroup],
      });
    default:
      return state;
  }
};

export default UserGroupReducer;
