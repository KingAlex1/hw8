import users from "../users";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../../actions/users";

describe("reducer users", () => {
  const initState = {
    isFetching: false,
    isFetched: false,
    user: {},
    error: null
  };

  describe("экшен fetchUserRequest ", () => {
    it("экшен с типом fetchUsersRequest изменяет флаг isFetching", () => {
      expect(users(initState, fetchUserRequest()).isFetching).toBe(true);
    });
    it("экшен с типом fetchUsersRequest изменяет флаг isFetched", () => {
      expect(users(initState, fetchUserRequest()).isFetched).toBe(false);
    });
    it("очищают поле data, если приходит экшен fetchUserRequest", () => {
      expect(users(initState, fetchUserRequest()).user).toEqual({});
    });
    it("очищают поле error, если приходит экшен fetchUserRequest", () => {
      expect(users(initState, fetchUserRequest()).error).toBe(null);
    });
  });

  describe("экшен fetchUserSuccess ", () => {
    it("экшен с типом fetchUserSuccess изменяет флаг isFetching", () => {
      expect(users(initState, fetchUserSuccess({ data: "Me" })).isFetching).toBe(false);
    });
    it("экшен с типом fetchUserSuccess изменяет флаг isFetched", () => {
      expect(users(initState, fetchUserSuccess({ data: "Me" })).isFetched).toBe(true);
    });
    it("fetchUserSuccess add action.payload to user prop", () => {
        expect(users(initState, fetchUserSuccess({ data: "Ivan" })).user).toEqual(
          { data: "Ivan" }
        );
      });
      
    it("очищают поле error, если приходит экшен fetchUserSuccess", () => {
      expect(users(initState, fetchUserSuccess({ data: "Me" })).error).toBe(false);
    });
  });
  describe("экшен fetchUserFailure ", () => {
    it("экшен с типом fetchUserFailure изменяет флаг isFetching", () => {
      expect(users(initState, fetchUserFailure(undefined)).isFetching).toBe(false);
    });
    it("экшен с типом fetchUserFailure изменяет флаг isFetched", () => {
      expect(users(initState, fetchUserFailure(undefined)).isFetched).toBe(true);
    });

    it("очищают поле error, если приходит экшен fetchUserFailure", () => {
      expect(users(initState, fetchUserFailure(undefined)).error).toBe(undefined);
    });
  });
});
