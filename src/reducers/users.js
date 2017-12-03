import {
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserRequest
} from "../actions/users";
import { handleActions } from "redux-actions";

const initState = {
  isFetching: false,
  isFetched: false,
  user: {},
  error: null
};

const users = handleActions(
  {
    [fetchUserRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    [fetchUserSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      user: action.payload.data,
      error: false
    }),
    [fetchUserFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.error
    })
  },
  initState
);

export default users;
