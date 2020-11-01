import { LOGIN_SUCCESS, LOGOUT_USER } from "~/constants/actionTypes";

const initialState = {
  token: null,
  username: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        token: action.payload.token,
        username: action.payload.username,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        token: null,
        username: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
