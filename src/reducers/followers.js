import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/users";
import { handleActions } from "redux-actions";


const initState = {
  isFetching: false,
  isFetched: false,
  followers: [],
  error: null,
  
};

const followers = handleActions(
  {
    [fetchFollowersRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      error: null
      
    }),
    [fetchFollowersSuccess]: (state, action) => ({
      ...state,
      
      isFetching: false,
      isFetched: true,
      error: false,
      followers: action.payload.data
    }),
    [fetchFollowersFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.error
    })
  },
  initState
);

export default followers;
