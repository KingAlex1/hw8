import {
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserRequest
} from "../actions/users";
import { fetchTokenOwnerRequest } from "../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { getTokenOwner } from "../api";
import { getUserInformation } from "../api";
import requestFlow from "../sagas/request";

export function* fetchUserSaga(action) {
  try {
    let response;
    if (fetchTokenOwnerRequest.toString() === action.type) {
      response = yield call(requestFlow, getTokenOwner, action.payload);
    } else {
      response = yield call(requestFlow, getUserInformation, action.payload);
    }
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest([fetchTokenOwnerRequest, fetchUserRequest], fetchUserSaga);
}