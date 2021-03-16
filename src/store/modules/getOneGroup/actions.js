import { getOneGroupType } from "./actionsType";

export const getOneGroupAction = (oneGroup) => ({
  type: getOneGroupType,
  oneGroup,
});
