import { createActions } from "redux-actions";

export const {
  fetchFollowersSuccess,
  fetchFollowersFailure,
  fetchFollowersRequest
} = createActions(
  "FETCH_FOLLOWERS_SUCCESS",
  "FETCH_FOLLOWERS_FAILURE",
  "FETCH_FOLLOWERS_REQUEST"
);