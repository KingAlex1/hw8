import React from "react";
import { shallow } from "enzyme";

import Follower from "../../Follower";

describe("component Follower", () => {
  const login = "name";
  const elementProps = {
    avatar_url: "1",
    login
  };
  const wrapper = shallow(<Follower element={elementProps} />);

  it("Проверить наличие аватара", () => {
    expect(wrapper.find(".follower__avatar")).toHaveLength(1);
  });

  it("Проверить наличие login пользователя переданного через props", () => {
    expect(wrapper.instance().props.element.login).toEqual(login);
  });

  it("Проверить что ссылка с логина пользователя ведет на /user/{user.login}.", () => {
    const link = wrapper.find(".follower__link");
    expect(link.prop("to")).toEqual(`/user/${login}`);
  });
});
