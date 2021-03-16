const groupIDReducer = (state = "", action) => {
  switch (action.type) {
    case "@group/GET_ID":
      const { groupID } = action;
      return groupID;

    default:
      return state;
  }
};

export default groupIDReducer;
