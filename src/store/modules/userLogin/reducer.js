import { signInType } from "./actionsType";

const token = localStorage.getItem("token") || "";

const defaultState = {
  token,
};

const signInReducer = (state = defaultState, action) => {
  switch (action.type) {
    case signInType:
      const { token } = action;
      return { ...state, token };

    default:
      return state;
  }
};

export default signInReducer;
