import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/repos";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserFollowers } from "../api";

function* onfetchFollowersRequest(action) {
  const userName = action.payload;
  try {
    const user = yield call(getUserFollowers, userName);
    yield put(fetchFollowersSuccess(user));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(
    fetchFollowersRequest,
    onfetchFollowersRequest
  );
}

