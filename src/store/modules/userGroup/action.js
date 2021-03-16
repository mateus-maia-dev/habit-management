import { getGroupUser } from "./actionType";

const UserGroup = (userGroup) => ({
  type: getGroupUser,
  userGroup,
});

export default UserGroup;
