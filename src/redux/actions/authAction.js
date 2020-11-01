import { LOGIN_SUCCESS, LOGOUT_USER } from "~/constants/actionTypes";

export const loginUser = (username, token) => {
  return { type: LOGIN_SUCCESS, payload: { username, token } };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
