import { authorize, logout } from "../actions/auth";
import { handleActions } from "redux-actions";

const initState = {
  isAuthorized: false
};

const auth = handleActions(
  {
    [authorize]: (state, action) => ({
      isAuthorized: true
    }),
    [logout]: (state, action) => ({ isAuthorized: false })
  },
  initState
);

export default auth;
