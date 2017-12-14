import {
    fetchFollowersSuccess,
    fetchFollowersFailure
  } from "../../actions/users";
  import { call, put } from "redux-saga/effects";
  import { fetchFollowersSaga } from "../followers";
  import { getUserFollowers } from "../../api";
  import requestFlow from "../request";
  
  describe("Saga Followers:", () => {
    it("call getUserFollowers", () => {
      const action = { payload: "test_username" };
      const saga = fetchFollowersSaga(action);
      expect(saga.next().value).toEqual(
        call(requestFlow, getUserFollowers, "test_username")
      );
    });
    it("dispatch action fetchFollowersSuccess with user from call on success", () => {
      const action = { payload: "test_username" };
      const user = { login: "test", id: "1" };
      const saga = fetchFollowersSaga(action);
      saga.next();
      expect(saga.next(user).value).toEqual(put(fetchFollowersSuccess(user)));
    });
    it("dispatch action fetchFollowersFailure with user from call on failure", () => {
      const action = { payload: "test_username" };
      const error = new Error("test error");
      const saga = fetchFollowersSaga(action);
      saga.next();
      expect(saga.throw(error).value).toEqual(put(fetchFollowersFailure(error)));
    });
  });