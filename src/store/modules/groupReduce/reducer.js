import {
  groupRequestType,
  activitiesPostType,
  activitiesDeleteType,
  activitiesPatchType,
  goalsPostType,
  goalsDeleteType,
  goalsPatchType,
} from "./actionsType";

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

    case activitiesPostType:
      const { groupPost } = action;
      return (state = {
        groupData: groupPost.results,
        change: !change,
      });

    case activitiesDeleteType:
      const { groupDelete } = action;
      return (state = {
        groupData: groupDelete.results,
        change: !change,
      });

    case activitiesPatchType:
      const { groupPatch } = action;
      return (state = {
        groupData: groupPatch.results,
        change: !change,
      });

    case goalsPostType:
      const { goalsPost } = action;
      return (state = {
        groupData: goalsPost.results,
        change: !change,
      });

    case goalsDeleteType:
      const { goalsDelete } = action;
      return (state = {
        groupData: goalsDelete.results,
        change: !change,
      });

    case goalsPatchType:
      const { goalsPatch } = action;
      return (state = {
        groupData: goalsPatch.results,
        change: !change,
      });

    default:
      return state;
  }
};

export default groupIDReducer;
