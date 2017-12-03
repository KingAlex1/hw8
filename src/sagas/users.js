import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserInformation } from "../api";
import { logout } from "../actions/auth";

function* onFetchUserRequest(action) {
  const userName = action.payload;
  try {
    const user = yield call(getUserInformation, userName);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
    yield put (logout());
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, onFetchUserRequest);
}
