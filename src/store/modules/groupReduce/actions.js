import {
  groupRequestType,
  groupCreateType,
  activitiesPostType,
  activitiesDeleteType,
  activitiesPatchType,
  goalsPostType,
  goalsDeleteType,
  goalsPatchType,
} from "./actionsType";

export const groupRequestAction = (group) => ({
  type: groupRequestType,
  group,
});

export const groupCreateAction = (groupCreate) => ({
  type: groupCreateType,
  groupCreate,
});

export const activitiesPostAction = (groupPost) => ({
  type: activitiesPostType,
  groupPost,
});

export const activitiesDeleteAction = (groupDelete) => ({
  type: activitiesDeleteType,
  groupDelete,
});

export const activitiesPatchAction = (groupPatch) => ({
  type: activitiesPatchType,
  groupPatch,
});

export const goalsPostAction = (goalsPost) => ({
  type: goalsPostType,
  goalsPost,
});

export const goalsDeleteAction = (goalsDelete) => ({
  type: goalsDeleteType,
  goalsDelete,
});

export const goalsPatchAction = (goalsPatch) => ({
  type: goalsPatchType,
  goalsPatch,
});
