import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/repos";
import { handleActions } from "redux-actions";

const initState = {
  isFetching: false,
  isFetched: false,
  followers: [],
  error: null
};

const followers = handleActions(
  {
    [fetchFollowersRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    [fetchFollowersSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      followers: action.payload.data
    }),
    [fetchFollowersFailure]: (state, action) => ({
      isFetching: false,
      isFetched: true,
      error: action.error
    })
  },
  initState
);

export default followers;
