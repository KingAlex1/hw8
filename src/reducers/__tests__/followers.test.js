import followers from "../followers";

import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../../actions/users";

const initState = {
  isFetching: false,
  isFetched: false,
  followers: [],
  error: null
};
describe("reducer followers", () => {
  initState.error = true;
  describe("action fetchFollowersReques", () => {
    it("экшен с типом fetchFollowersRequest изменяет флаг isFetching", () => {
      expect(followers(initState, fetchFollowersRequest()).isFetching).toBe(true);
    });
    it("экшен с типом fetchFollowersRequest изменяет флаг isFetched", () => {
      expect(followers(initState, fetchFollowersRequest()).isFetched).toBe(false);
    });
    it("очищают поле error, если приходит экшен fetchFollowersRequest", () => {
      expect(followers(initState, fetchFollowersRequest()).error).toBe(null);
    });
    it("очищают поле followers, если приходит экшен fetchFollowersRequest", () => {
      expect(followers(initState, fetchFollowersRequest()).followers).toEqual([]);
    });
  });

  describe("action fetchFollowersSuccess", () => {
    it("экшен с типом fetchFollowersSuccess изменяет флаг isFetching", () => {
      expect(
        followers(initState, fetchFollowersSuccess({ data: [1, 2, 3] })).isFetching
      ).toBe(false);
    });
    it("экшен с типом fetchFollowersSuccess изменяет флаг isFetched", () => {
      expect(
        followers(initState, fetchFollowersSuccess({ data: [1, 2, 3] })).isFetched
      ).toBe(true);
    });
    it("экшен с типом fetchFollowersSuccess наполняют данными ", () => {
      expect(
        followers(initState, fetchFollowersSuccess({ data: [1, 2, 3] })).followers
      ).toEqual([1, 2, 3]);
    });
    it("очищают поле error, если приходит экшен fetchFollowersSuccess", () => {
      expect(followers(initState, fetchFollowersSuccess({ data: [1, 2, 3] })).error).toBe(
        false
      );
    });

    describe("action fetchFollowersFailure", () => {
      it("экшен с типом fetchFollowersFailure изменяет флаг isFetching", () => {
        expect(followers(initState, fetchFollowersFailure(undefined)).isFetching).toBe(false)
      });
      it('экшен с типом fetchFollowersFailure изменяет флаг isFetched',()=>{
          expect(followers(initState, fetchFollowersFailure(undefined)).isFetched).toBe(true)
      })
      it('наполняют данными error, если приходит экшен fetchFollowersFailure',()=>{
        expect(followers(initState,fetchFollowersFailure(undefined)).error).toBe(undefined)
      })
    });
  });
});
