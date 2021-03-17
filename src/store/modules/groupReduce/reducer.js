import { groupRequestType } from "./actionsType";

const defaulState = {
  groupData: [],
  change: false,
};

const groupIDReducer = (state = defaulState, action) => {
  const change = false;
  switch (action.type) {
    case groupRequestType:
      const { group } = action;
      return (state = {
        groupData: group.results,
        change: change,
      });

    default:
      return state;
  }
};

export default groupIDReducer;
