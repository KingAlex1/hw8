import {
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserRequest,
  fetchTokenOwnerRequest
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
      user: action.payload,
      error: false
    }),
    [fetchUserFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.error
    }),
    [fetchTokenOwnerRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      user: {},
      error: false
    })
  },
  initState
);

export default users;
