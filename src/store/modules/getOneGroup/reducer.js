import { getOneGroupType } from "./actionsType";

const defaulState = {
  groupData: {},
  change: false,
};

const getOneGroupReducer = (state = defaulState, action) => {
  const change = false;
  switch (action.type) {
    case getOneGroupType:
      const { oneGroup } = action;
      return (state = {
        groupData: oneGroup,
        change: change,
      });

    default:
      return state;
  }
};

export default getOneGroupReducer;
