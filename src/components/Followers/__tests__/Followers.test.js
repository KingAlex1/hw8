import React from "react";
import { shallow } from "enzyme";
import Spinner from "react-svg-spinner";
import { Followers } from "../../Followers";
import Follower from "../../Follower";

describe(" component Followers", () => {
  const fetchFollowersRequest = () => true;
  const loginProps = "login";
  const followersProps = {
    error: "false",
    followers: [{ id: 1 }],
    isFetching: false
  };

  const wrapper = shallow(
    <Followers
      login={loginProps}
      followers={followersProps}
      fetchFollowersRequest={fetchFollowersRequest}
    />
  );

  it("Проверить наличие метода класса componentDidMount", () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it("Проверить что возвращаются компоненты Followers в том количестве, в котором передаются в props.followers.", () => {
    expect(wrapper.find(Follower)).toHaveLength(1);
  });

  describe(" Sppiner", () => {
    beforeAll(() => {
      wrapper.setProps({
        followers: {
          isFetching: true
        }
      });
    });

    it("Проверить наличие лоадера/спинера, если isFetcing === true", () => {
      expect(wrapper.contains(<Spinner size="64px" color="red" gap={5} />)).toBeTruthy();
    });
  });
});
