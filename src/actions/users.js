import { createActions } from "redux-actions";

export const {
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserRequest
} = createActions(
  "FETCH_USER_SUCCESS",
  "FETCH_USER_FAILURE",
  "FETCH_USER_REQUEST"
);