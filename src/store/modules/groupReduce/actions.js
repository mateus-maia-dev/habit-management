import { groupRequestType } from "./actionsType";

export const groupRequestAction = (group) => ({
  type: groupRequestType,
  group,
});
