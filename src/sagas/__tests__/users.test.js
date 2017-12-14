import {
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest,
  fetchUserRequest
} from "../../actions/users";
import { call, put } from "redux-saga/effects";
import { fetchUserSaga } from "../users";
import { getUserInformation } from "../../api";
import requestFlow from "../request";
import { getTokenOwner } from "../../api";

describe("Saga users:", () => {
  describe("fetchTokenOwnerRequest action", () => {
    const saga = fetchUserSaga(fetchTokenOwnerRequest());
    it("Effect call getTokenOwner", () => {
      expect(saga.next().value).toEqual(
        call(requestFlow, getTokenOwner, undefined)
      );
    });
    it("Effect put fetchUserSuccess", () => {
      expect(saga.next({ data: "data" }).value).toEqual(
        put(fetchUserSuccess("data"))
      );
    });
  });

  describe("fetchUserRequest action", () => {
    const saga = fetchUserSaga(fetchUserRequest());
    it("Effect call getUserInformation", () => {
      expect(saga.next().value).toEqual(
        call(requestFlow, getUserInformation, undefined)
      );
    });
    it("Effect put fetchUserSuccess", () => {
      expect(saga.next({ data: "data" }).value).toEqual(
        put(fetchUserSuccess("data"))
      );
    });
  });

  describe("Error handling", () => {
    const saga = fetchUserSaga(fetchUserRequest());
    it("Effect call getUserInformation", () => {
      expect(saga.next().value).toEqual(
        call(requestFlow, getUserInformation, undefined)
      );
    });
    it("Effect put fetchUserFailure", () => {
      expect(saga.throw("error").value).toEqual(put(fetchUserFailure("error")));
    });
  });
});