import { fork } from "redux-saga/effects";
import { fetchUserWatch } from "./users";
//import {fetchUserReposWatch} from './repos';
import { fetchFollowersWatch } from "./followers";
import { authFlow } from "./auth";

export default function*() {
  yield fork(authFlow);
  yield fork(fetchUserWatch);
  //yield fork(fetchUserReposWatch);
  yield fork(fetchFollowersWatch);
}
