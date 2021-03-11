import { signInType } from "./actionsType";

export const singInAction = (token) => ({
  type: signInType,
  token,
});
